import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import LevelTest from '@/models/LevelTest';
import connectDB from '@/lib/mongodb';

interface RouteParams {
  params: {
    id: string;
  };
}

// GET 요청 핸들러
export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    await connectDB();
    const levelTest = await LevelTest.findById(context.params.id);
    
    if (!levelTest) {
      return NextResponse.json(
        { error: '레벨 테스트를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    return NextResponse.json(levelTest);
  } catch (error: any) {
    return NextResponse.json(
      { error: '레벨 테스트 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// PATCH 요청 핸들러
export async function PATCH(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const data = await request.json();
    await connectDB();
    
    const updatedLevelTest = await LevelTest.findByIdAndUpdate(
      context.params.id,
      { $set: data },
      { new: true }
    );

    if (!updatedLevelTest) {
      return NextResponse.json(
        { error: '레벨 테스트를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedLevelTest);
  } catch (error: any) {
    return NextResponse.json(
      { error: '레벨 테스트 수정 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// DELETE 요청 핸들러
export async function DELETE(
  request: NextRequest,
  context: RouteParams
) {
  try {
    await connectDB();
    const deletedLevelTest = await LevelTest.findByIdAndDelete(context.params.id);
    
    if (!deletedLevelTest) {
      return NextResponse.json(
        { error: '레벨 테스트를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: '레벨 테스트가 삭제되었습니다.' });
  } catch (error: any) {
    return NextResponse.json(
      { error: '레벨 테스트 삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
