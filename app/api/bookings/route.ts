// ssm/app/api/bookings/route.ts
import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

type Booking = {
  id: string
  skillId: string
  name: string
  datetime: string
  notes?: string
  createdAt: string
}

const FILE = path.join(process.cwd(), 'data', 'bookings.json')

async function readBookings(): Promise<Booking[]> {
  try {
    const raw = await fs.readFile(FILE, 'utf8')
    return JSON.parse(raw || '[]')
  } catch (err: any) {
    // if file missing, create it and return empty
    if (err.code === 'ENOENT') {
      await fs.mkdir(path.dirname(FILE), { recursive: true })
      await fs.writeFile(FILE, '[]', 'utf8')
      return []
    }
    throw err
  }
}

async function writeBookings(bookings: Booking[]) {
  await fs.writeFile(FILE, JSON.stringify(bookings, null, 2), 'utf8')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { skillId, name, datetime, notes } = body

    if (!skillId || !name || !datetime) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const bookings = await readBookings()

    const booking: Booking = {
      id: String(Date.now()),
      skillId,
      name,
      datetime,
      notes: notes || '',
      createdAt: new Date().toISOString(),
    }

    bookings.push(booking)
    await writeBookings(bookings)

    return NextResponse.json({ ok: true, booking }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}

export async function GET() {
  try {
    const bookings = await readBookings()
    return NextResponse.json({ bookings }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to read bookings' }, { status: 500 })
  }
}
