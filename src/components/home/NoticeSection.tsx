'use client'
import { useEffect, useState } from 'react';

interface Notice {
  _id: string;
  title: string;
  category: string;
  createdAt: string;
}

export default function NoticeSection() {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('/api/notices');
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.error('공지사항을 불러오는데 실패했습니다:', error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">공지사항</h2>
          <p className="mt-4 text-lg text-gray-600">
            학원의 최신 소식과 일정을 확인하세요
          </p>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200">
            {notices.map((notice) => (
              <div key={notice._id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white mb-2">
                      {notice.category}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900">
                      {notice.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(notice.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}