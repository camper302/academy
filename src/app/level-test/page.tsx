import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '레벨테스트 - 동탄 영어 학원',
  description: '무료 레벨테스트로 나의 영어 실력을 확인해보세요.',
}

export default function LevelTestPage() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">레벨테스트</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-600">레벨테스트 신청 페이지를 준비 중입니다...</p>
        </div>
      </div>
    </main>
  );
}
