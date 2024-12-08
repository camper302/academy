import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '공지사항 - 동탄 영어 학원',
  description: '학원 소식과 중요 공지사항을 확인하세요.',
}

export default function NoticePage() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">공지사항</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-600">공지사항을 준비 중입니다...</p>
        </div>
      </div>
    </main>
  );
}
