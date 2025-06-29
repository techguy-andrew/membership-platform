import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Auth API endpoint - GET method' });
}

export async function POST() {
  return NextResponse.json({ message: 'Auth API endpoint - POST method' });
}
