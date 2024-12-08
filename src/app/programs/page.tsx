import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '교육 프로그램 - 동탄 영어 학원',
  description: '체계적인 영어 교육 프로그램을 제공합니다.',
}

export default function ProgramsPage() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">교육 프로그램</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-600">프로그램 정보를 준비 중입니다...</p>
        </div>
      </div>
    </main>
  );
}
