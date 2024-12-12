/**
 * 공지사항 목록 페이지
 * 위치: kiwoom-academy/my-app/src/app/notice/page.tsx
 */

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Notice } from '@/types/notice';
import TabNavigation from '@/components/common/TabNavigation';
import { useRouter, useSearchParams } from 'next/navigation';

export default function NoticePage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: '전체' },
    { id: 'normal', label: '일반' },
    { id: 'emergency', label: '긴급' },
  ];

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/notices`);
        if (!res.ok) throw new Error('Failed to fetch notices');
        const data = await res.json();
        setNotices(data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['all', 'normal', 'emergency'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/notice?tab=${tabId}`);
  };

  if (loading) {
    return <div className="text-center py-16">로딩 중...</div>;
  }

  const sortedNotices = [...notices].sort((a, b) => a.priority - b.priority);

  const filteredNotices = sortedNotices.filter(notice => {
    if (activeTab === 'all') return true;
    if (activeTab === 'emergency') return notice.isEmergency;
    if (activeTab === 'normal') return !notice.isEmergency;
    return true;
  });

  return (
    <main className="bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-4">공지사항</h1>
          <p className="text-center text-gray-600">
            기우음 영어학원의 새로운 소식을 알려드립니다
          </p>
        </div>
      </div>

      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-6">
          {filteredNotices.map((notice) => (
            <Link 
              href={`/notice/${notice._id}`}
              key={notice._id}
              className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
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
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {notice.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {notice.content}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(notice.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">등록된 공지사항이 없습니다.</p>
          </div>
        )}
      </div>
    </main>
  );
}