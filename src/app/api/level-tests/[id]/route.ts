import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import LevelTest from '@/models/LevelTest';

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
      { error: '상태 업데이트 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
