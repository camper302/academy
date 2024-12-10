'use server'

import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import LevelTest from '@/models/LevelTest';

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    
    const levelTest = await LevelTest.create({
      name: body.name,
      phone: body.phone,
      grade: body.grade,
    });

    return NextResponse.json(levelTest);
  } catch (error) {
    console.error('레벨 테스트 신청 중 오류:', error);
    return NextResponse.json(
      { error: '레벨 테스트 신청 중 오류가 발생했습니다.' },
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
