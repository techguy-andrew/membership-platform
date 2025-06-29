import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Subscriptions API endpoint - GET method',
  });
}

export async function POST() {
  return NextResponse.json({
    message: 'Subscriptions API endpoint - POST method',
  });
}

export async function PUT() {
  return NextResponse.json({
    message: 'Subscriptions API endpoint - PUT method',
  });
}

export async function DELETE() {
  return NextResponse.json({
    message: 'Subscriptions API endpoint - DELETE method',
  });
}
