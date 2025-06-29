import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Users API endpoint - GET method' });
}

export async function POST() {
  return NextResponse.json({ message: 'Users API endpoint - POST method' });
}

export async function PUT() {
  return NextResponse.json({ message: 'Users API endpoint - PUT method' });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Users API endpoint - DELETE method' });
}
