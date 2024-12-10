import { NextResponse } from 'next/server';
import Schedule from '@/models/Schedule';
import connectDB from '@/lib/mongodb';

// 단일 시간표 조회
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const schedule = await Schedule.findById(params.id);
    
    if (!schedule) {
      return NextResponse.json({
        success: false,
        error: '시간표를 찾을 수 없습니다.'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: schedule
    });
  } catch (error: any) {
    console.error('시간표 조회 에러:', error);
    return NextResponse.json({
      success: false,
      error: '시간표 조회에 실패했습니다.'
    }, { status: 500 });
  }
}

// 시간표 수정
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const data = await request.json();

    const schedule = await Schedule.findByIdAndUpdate(
      params.id,
      data,
      { new: true, runValidators: true }
    );

    if (!schedule) {
      return NextResponse.json({
        success: false,
        error: '시간표를 찾을 수 없습니다.'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: schedule
    });
  } catch (error: any) {
    console.error('시간표 수정 에러:', error);
    return NextResponse.json({
      success: false,
      error: '시간표 수정에 실패했습니다.'
    }, { status: 500 });
  }
}

// 시간표 삭제
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const schedule = await Schedule.findByIdAndDelete(params.id);

    if (!schedule) {
      return NextResponse.json({
        success: false,
        error: '시간표를 찾을 수 없습니다.'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: '시간표가 삭제되었습니다.'
    });
  } catch (error: any) {
    console.error('시간표 삭제 에러:', error);
    return NextResponse.json({
      success: false,
      error: '시간표 삭제에 실패했습니다.'
    }, { status: 500 });
  }
}
