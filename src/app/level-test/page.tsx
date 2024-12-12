import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '레벨테스트 - 동탄 영어 학원',
  description: '무료 레벨테스트로 나의 영어 실력을 확인해보세요.',
}

/**
 * 레벨 테스트 신청 페이지
 * - 기존 LevelTestSection 컴포넌트를 재사용
 * - /level-test 경로로 접근 시 표시되는 페이지
 */
import LevelTestSection from '@/components/home/LevelTestSection';

export default function LevelTestPage() {
  return (
    <main className="bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-4">레벨 테스트</h1>
          <p className="text-center text-gray-600">
            무료 레벨테스트로 나의 영어 실력을 확인해보세요
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow">
          <LevelTestSection />
        </div>
      </div>
    </main>
  );
}
