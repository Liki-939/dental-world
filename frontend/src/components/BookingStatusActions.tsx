'use client';

import { useState, useTransition } from 'react';
import { CheckCircle2, XCircle, CheckSquare } from 'lucide-react';
import { updateBookingStatus } from '@/app/admin/actions';

interface BookingStatusActionsProps {
  bookingId: string;
  currentStatus: string;
}

export default function BookingStatusActions({ bookingId, currentStatus }: BookingStatusActionsProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  const handleStatusChange = (newStatus: string) => {
    startTransition(async () => {
      setError('');
      const result = await updateBookingStatus(bookingId, newStatus);
      if (!result.success) {
        setError(result.error || 'Failed to update');
      }
    });
  };

  if (currentStatus === 'COMPLETED' || currentStatus === 'CANCELLED') {
    return null; // Don't show actions for terminal states
  }

  return (
    <div className="flex items-center gap-2 mt-4 md:mt-0">
      {error && <span className="text-red-500 text-xs mr-2">{error}</span>}
      
      {currentStatus === 'PENDING' && (
        <button
          onClick={() => handleStatusChange('CONFIRMED')}
          disabled={isPending}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-light/10 text-brand hover:bg-brand hover:text-white rounded-lg transition text-sm font-medium disabled:opacity-50"
        >
          <CheckCircle2 className="w-4 h-4" />
          Confirm
        </button>
      )}

      {currentStatus === 'CONFIRMED' && (
        <button
          onClick={() => handleStatusChange('COMPLETED')}
          disabled={isPending}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-600 hover:bg-green-600 hover:text-white rounded-lg transition text-sm font-medium disabled:opacity-50"
        >
          <CheckSquare className="w-4 h-4" />
          Complete
        </button>
      )}

      <button
        onClick={() => handleStatusChange('CANCELLED')}
        disabled={isPending}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition text-sm font-medium disabled:opacity-50"
      >
        <XCircle className="w-4 h-4" />
        Cancel
      </button>
    </div>
  );
}
