import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Notice from '@/models/Notice';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();
    await connectDB();
    
    const updatedNotice = await Notice.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true }
    );
    
    if (!updatedNotice) {
      return NextResponse.json(
        { error: '공지사항을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedNotice);
  } catch (error) {
    return NextResponse.json(
      { error: '공지사항 수정 실패' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    await connectDB();
    
    const deletedNotice = await Notice.findByIdAndDelete(id);
    
    if (!deletedNotice) {
      return NextResponse.json(
        { error: '공지사항을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: '삭제 완료' });
  } catch (error) {
    return NextResponse.json(
      { error: '공지사항 삭제 실패' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const notice = await Notice.findById(params.id);
    
    if (!notice) {
      return NextResponse.json(
        { error: '공지사항을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(notice);
  } catch (error) {
    return NextResponse.json(
      { error: '공지사항을 찾을 수 없습니다.' },
      { status: 404 }
    );
  }
}
