import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Notice from '@/models/Notice';

export async function GET() {
  try {
    await connectDB();
    const notices = await Notice.find().sort({ priority: -1, createdAt: -1 });
    return NextResponse.json(notices);
  } catch (error) {
    return NextResponse.json({ error: '공지사항 조회 실패' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();
    const notice = await Notice.create(body);
    return NextResponse.json(notice);
  } catch (error) {
    return NextResponse.json({ error: '공지사항 생성 실패' }, { status: 500 });
  }
}