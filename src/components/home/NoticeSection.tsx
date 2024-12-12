import Link from 'next/link';
import { Notice } from '@/types/notice';

interface NoticeSectionProps {
  notices?: Notice[];
  limit?: number;  // limit 속성 추가
}

export default function NoticeSection({ notices = [], limit = 4 }: NoticeSectionProps) {
  const sortedNotices = [...notices]
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">2동탄에서 만나는 최선의 교육</h2>
          <Link 
            href="/notice" 
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            공지사항 더보기
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedNotices.map((notice) => (
            <Link 
              href={`/notice/${notice._id}`} 
              key={notice._id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    공지사항
                  </span>
                  {notice.isEmergency && (
                    <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      긴급
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                  {notice.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(notice.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-600 line-clamp-3">
                  {notice.content}
                </p>
              </div>
              <div className="mt-4 text-right">
                <span className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                  자세히 보기
                </span>
              </div>
            </Link>
          ))}
        </div>

        {notices.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <p className="text-gray-500">등록된 공지사항이 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
}