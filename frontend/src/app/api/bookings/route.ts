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
  } catch (error) {
    console.error('Error creating booking:', error);
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
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
