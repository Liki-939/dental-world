import { prisma } from '../../db/prisma';
import { Calendar, MapPin, Phone, Mail, Clock } from 'lucide-react';
import BookingStatusActions from '@/components/BookingStatusActions';
import { isAuthenticatedAdmin } from './auth';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    redirect('/admin/login');
  }

  const bookings = await prisma.booking.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 font-heading">Appointment Requests</h2>
          <p className="text-slate-500 mt-1">Manage and view all incoming booking requests from the website.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm font-medium text-slate-700">
          Total: {bookings.length}
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">No bookings yet</h3>
          <p className="text-slate-500">When patients submit the form, their requests will appear here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-slate-900">{booking.fullName}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                        {booking.status}
                      </span>
                    </div>
                    <p className="text-brand font-medium">{booking.treatment || 'General Consultation'}</p>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-3">
                    <div className="text-sm text-slate-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Submitted: {new Date(booking.createdAt).toLocaleString()}
                    </div>
                    <BookingStatusActions bookingId={booking.id} currentStatus={booking.status} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 border-y border-slate-100 my-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-slate-400 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Phone</div>
                      <a href={`tel:${booking.phoneNumber}`} className="text-slate-700 hover:text-brand font-medium">
                        {booking.phoneNumber}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-slate-400 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Email</div>
                      {booking.emailAddress ? (
                        <a href={`mailto:${booking.emailAddress}`} className="text-slate-700 hover:text-brand">
                          {booking.emailAddress}
                        </a>
                      ) : (
                        <span className="text-slate-400 italic">Not provided</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-slate-400 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Location</div>
                      <div className="text-slate-700">{booking.preferredLocation}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-slate-400 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Pref. Date</div>
                      <div className="text-slate-700">{booking.preferredDate || <span className="text-slate-400 italic">Flexible</span>}</div>
                    </div>
                  </div>
                </div>

                {booking.message && (
                  <div className="bg-slate-50 p-4 rounded-xl mt-4">
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Patient Message</div>
                    <p className="text-slate-700 italic">"{booking.message}"</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
