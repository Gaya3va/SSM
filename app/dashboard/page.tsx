// app/dashboard/page.tsx
import React from 'react';
import BookingList from '@/components/BookingList';



type Booking = {
  id: string;
  name: string;
  skillId?: string;
  notes?: string;
  createdAt?: string;
};

async function getBookings() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const url = `${API_BASE_URL || "http://localhost:3000"}/api/bookings`;

  const res = await fetch(url, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    console.error("Failed to fetch bookings:", res.status);
    return [];
  }

  const data = await res.json();
  return data.bookings || [];
}

export default async function Dashboard() {
  const bookings = await getBookings();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <p className="text-sm text-gray-700 mb-6">Showing bookings for teacher</p>

      {/* pass only the plain bookings array into the client component */}
      <BookingList bookings={bookings} />
    </main>
  );
}

