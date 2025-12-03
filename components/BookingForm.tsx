'use client'
import { useState } from 'react'

export default function BookingForm({ skill }: { skill: any }) {
  const [name, setName] = useState('')
  const [datetime, setDatetime] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          skillId: skill.id,
          name,
          datetime,
          notes,
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Booking failed')

      setMessage('Booking confirmed (mock). ID: ' + data.booking.id)
      // optional: clear form
      setName('')
      setDatetime('')
      setNotes('')
    } catch (err: any) {
      setMessage('Error: ' + (err.message || 'Unknown'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Your Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          className="w-full border p-2 rounded-md mt-1"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Preferred Date & Time</label>
        <input
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          type="datetime-local"
          required
          className="w-full border p-2 rounded-md mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Notes (optional)</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border p-2 rounded-md mt-1"
          rows={3}
          placeholder="Anything specific you want to learn?"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 mt-4"
        disabled={loading}
      >
        {loading ? 'Booking...' : 'Confirm Booking'}
      </button>

      {message && <div className="text-sm mt-2">{message}</div>}
    </form>
  )
}
