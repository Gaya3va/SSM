// ssm/components/BookingList.tsx
'use client';

import React, { useState } from 'react';

export type Booking = {
  id: string;
  name: string;
  skillId?: string;
  notes?: string;
  createdAt?: string;
};

type Props = {
  bookings: Booking[];
  teacherId?: string; // optional
};

export default function BookingList({ bookings: initialBookings }: Props) {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings || []);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleDelete(id: string) {
    const ok = confirm('Cancel this booking?');
    if (!ok) return;

    try {
      setLoadingId(id);
      const res = await fetch(`/api/bookings/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      // remove from UI
      setBookings((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error(err);
      alert('Could not delete booking. Try again.');
    } finally {
      setLoadingId(null);
    }
  }

  if (!bookings.length) {
    return <p className="text-sm text-gray-600">No bookings yet.</p>;
  }

  return (
    <div className="space-y-3">
      {bookings.map((b) => (
        <div key={b.id} className="border p-4 rounded shadow-sm">
          <h3 className="font-medium text-lg">{b.name}</h3>
          {b.notes ? <p className="text-sm text-gray-700">{b.notes}</p> : null}
          {b.createdAt ? <p className="text-xs text-gray-500">Booked at: {new Date(b.createdAt).toLocaleString()}</p> : null}
          <div className="mt-2">
            <button
              className="bg-red-600 text-white px-3 py-1 rounded disabled:opacity-60"
              onClick={() => handleDelete(b.id)}
              disabled={loadingId === b.id}
            >
              {loadingId === b.id ? 'Cancelling…' : 'Cancel booking'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

