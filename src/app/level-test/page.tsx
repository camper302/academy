import { Metadata } from 'next'
import LevelTestSection from '@/components/home/LevelTestSection';

export const metadata: Metadata = {
  title: '레벨테스트 - 동탄 영어 학원',
  description: '무료 레벨테스트로 나의 영어 실력을 확인해보세요.',
}

/**
 * 레벨 테스트 신청 페이지
 * - 기존 LevelTestSection 컴포넌트를 재사용
 * - /level-test 경로로 접근 시 표시되는 페이지
 */
export default function LevelTestPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">레벨 테스트</h1>
          <p className="text-xl text-gray-700">
            무료 레벨테스트로 나의 영어 실력을 확인해보세요
          </p>
        </div>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg">
          <LevelTestSection />
        </div>
      </div>
    </main>
  );
}
