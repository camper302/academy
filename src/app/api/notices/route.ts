import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Notice from '@/models/Notice';

export async function GET() {
  try {
    await connectDB();
    const notices = await Notice.find({}).sort({ createdAt: -1 }).limit(5);
    return NextResponse.json(notices);
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

interface NoticeData {
  title: string;
  content: string;
  category: '공지' | '일정' | '이벤트';
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as NoticeData;
    console.log('Received body:', body);

    if (!body.title || !body.content || !body.category) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      );
    }

    await connectDB();
    const notice = await Notice.create(body);
    return NextResponse.json(notice);
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}