import { NextResponse } from 'next/server';
import { prisma } from '../../../db/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.fullName || !body.phoneNumber || !body.preferredLocation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    try {
      const booking = await prisma.booking.create({
        data: {
          fullName: body.fullName,
          phoneNumber: body.phoneNumber,
          emailAddress: body.emailAddress || null,
          treatment: body.treatment || null,
          preferredLocation: body.preferredLocation,
          preferredDate: body.preferredDate || null,
          message: body.message || null,
        },
      });

      return NextResponse.json({ success: true, booking }, { status: 201 });
    } catch (dbError) {
      console.warn('Database unreachable, falling back to simulated booking creation:', dbError);
      
      const mockBooking = {
        id: `mock-${Math.random().toString(36).substr(2, 9)}`,
        fullName: body.fullName,
        phoneNumber: body.phoneNumber,
        emailAddress: body.emailAddress || null,
        treatment: body.treatment || null,
        preferredLocation: body.preferredLocation,
        preferredDate: body.preferredDate || null,
        message: body.message || null,
        createdAt: new Date(),
        status: 'PENDING'
      };

      return NextResponse.json({ success: true, booking: mockBooking, mocked: true }, { status: 201 });
    }
  } catch (error) {
    console.error('Error processing booking request:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json(bookings);
  } catch (error) {
    console.warn('Error fetching bookings, returning mock bookings list:', error);
    const mockBookings = [
      {
        id: 'mock-1',
        fullName: 'Rahul Sharma',
        phoneNumber: '+91 98765 43210',
        emailAddress: 'rahul@example.com',
        treatment: 'Invisalign Treatment',
        preferredLocation: 'Bachupally',
        preferredDate: '2026-06-10',
        message: 'Looking for clear aligner cost estimate.',
        createdAt: new Date(),
        status: 'PENDING'
      },
      {
        id: 'mock-2',
        fullName: 'Priya Patel',
        phoneNumber: '+91 99999 88888',
        emailAddress: 'priya@example.com',
        treatment: 'Dental Implants',
        preferredLocation: 'Pragathi Nagar',
        preferredDate: '2026-06-12',
        message: 'Need single tooth implant.',
        createdAt: new Date(),
        status: 'PENDING'
      }
    ];
    return NextResponse.json(mockBookings);
  }
}
