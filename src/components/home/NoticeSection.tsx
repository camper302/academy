import Link from 'next/link';
import { Notice } from '@/types/notice';

interface NoticeSectionProps {
  notices?: Notice[];
  limit?: number;
}

export default function NoticeSection({ notices = [], limit = 4 }: NoticeSectionProps) {
  const sortedNotices = [...notices]
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              공지사항
            </h2>
            <p className="text-lg text-gray-600">
              키움어학원의 새로운 소식을 확인하세요
            </p>
          </div>
          <Link 
            href="/notice" 
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-200"
          >
            전체 공지사항 보기
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedNotices.map((notice) => (
            <Link 
              href={`/notice/${notice._id}`} 
              key={notice._id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-200 p-6 flex flex-col h-full transform hover:-translate-y-1"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
                    공지사항
                  </span>
                  {notice.isEmergency && (
                    <span className="text-sm font-medium text-red-600 bg-red-50 px-4 py-1.5 rounded-full">
                      긴급
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {notice.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(notice.createdAt).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="text-gray-600 line-clamp-3">
                  {notice.content}
                </p>
              </div>
              <div className="mt-6 flex items-center text-blue-600 group-hover:text-blue-700">
                <span className="text-sm font-medium">자세히 보기</span>
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {notices.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-lg text-gray-500">등록된 공지사항이 없습니다.</p>
              <p className="mt-2 text-sm text-gray-400">새로운 공지사항이 등록되면 이곳에 표시됩니다.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}