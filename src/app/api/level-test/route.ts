'use server'

import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import LevelTest from '@/models/LevelTest';

export async function POST(request: Request) {
  try {
    // 데이터베이스 연결 시도
    await connectDB();
    
    // 요청 본문 파싱
    const body = await request.json();
    console.log('받은 데이터:', body); // 디버깅용 로그
    
    // 데이터 유효성 검사
    if (!body.name || !body.phone || !body.grade) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 레벨 테스트 생성
    const levelTest = await LevelTest.create({
      name: body.name,
      phone: body.phone,
      grade: body.grade,
      status: 'PENDING'
    });

    console.log('생성된 레벨 테스트:', levelTest); // 디버깅용 로그

    return NextResponse.json({
      success: true,
      message: '레벨 테스트 신청이 완료되었습니다.',
      data: levelTest
    });

  } catch (error) {
    console.error('레벨 테스트 신청 중 오류:', error);
    
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : '레벨 테스트 신청 중 오류가 발생했습니다.' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const levelTests = await LevelTest.find().sort({ createdAt: -1 });
    return NextResponse.json(levelTests);
  } catch (error) {
    console.error('레벨 테스트 목록 조회 중 오류:', error);
    return NextResponse.json(
      { error: '레벨 테스트 목록 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const { id } = params;
    const body = await request.json();
    
    const updatedTest = await LevelTest.findByIdAndUpdate(
      id,
      { status: body.status },
      { new: true }
    );

    if (!updatedTest) {
      return NextResponse.json(
        { error: '레벨 테스트를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedTest);
  } catch (error) {
    console.error('레벨 테스트 상태 업데이트 중 오류:', error);
    return NextResponse.json(
      { error: '레벨 테스트 상태 업데이트 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
