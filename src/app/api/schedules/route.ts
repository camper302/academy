/**
 * @file Schedule API Route
 * @description 시간표 관리를 위한 API 엔드포인트
 */

import { NextResponse } from 'next/server';
import Schedule from '@/models/Schedule';
import connectDB from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    // MongoDB 연결
    const db = await connectDB();
    console.log('MongoDB 연결 성공');

    // 요청 데이터 파싱
    const data = await request.json();
    console.log('받은 데이터:', data);

    // 데이터 유효성 검사
    if (!data.grade || !data.dayOfWeek || !data.startTime || 
        !data.endTime || !data.className || !data.teacher) {
      return NextResponse.json({ 
        error: '모든 필드를 입력해주세요.' 
      }, { status: 400 });
    }

    // 스케줄 생성
    const schedule = await Schedule.create(data);
    console.log('생성된 스케줄:', schedule);

    return NextResponse.json({ 
      success: true, 
      data: schedule 
    });
  } catch (error: any) {
    // 상세한 에러 로깅
    console.error('시간표 등록 에러 상세:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    return NextResponse.json({ 
      error: '시간표 등록에 실패했습니다.',
      details: error.message 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const schedules = await Schedule.find({})
      .sort({ dayOfWeek: 1, startTime: 1 })
      .lean();
    
    return NextResponse.json({ 
      success: true, 
      data: schedules 
    });
  } catch (error: any) {
    console.error('시간표 조회 에러:', {
      message: error.message,
      stack: error.stack
    });
    
    return NextResponse.json({
      success: false,
      error: '시간표 조회 중 오류가 발생했습니다.',
      details: error.message
    }, { status: 500 });
  }
}