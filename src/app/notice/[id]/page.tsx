/**
 * 공지사항 상세 페이지
 * 위치: kiwoom-academy/my-app/src/app/notice/[id]/page.tsx
 */
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Notice } from '@/types/notice';

export default function NoticeDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('detail');

  // const tabs = [
  //   { id: 'detail', label: '상세내용' },
  //   { id: 'list', label: '목록으로' },
  // ];

    const tabs = [
    { id: 'list', label: '목록으로' }
  ];

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await fetch(`/api/notices/${id}`);
        if (!response.ok) throw new Error('공지사항을 불러오는데 실패했습니다');
        const data = await response.json();
        setNotice(data);
      } catch (error) {
        console.error('에러:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, [id]);

  const handleTabChange = (tabId: string) => {
    if (tabId === 'list') {
      router.push('/notice');
      return;
    }
    setActiveTab(tabId);
  };

  if (loading) {
    return <div className="text-center py-16">로딩 중...</div>;
  }

  if (!notice) {
    return <div className="text-center py-16">공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">공지사항</h1>
          <p className="text-xl text-gray-700">
            키움어학원의 새로운 소식을 알려드립니다
          </p>
        </div>
      </div>

     {/* 탭 네비게이션 */}
      <div className="sticky top-0 z-[80] bg-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <nav className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  flex-1 whitespace-nowrap py-6 px-4 text-center transition-all
                  hover:bg-gray-50 text-blue-600 border-b-2 border-blue-600 font-medium
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              공지사항
            </span>
            {notice.isEmergency && (
              <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                긴급
              </span>
            )}
          </div>
          
          <h2 className="text-2xl font-bold mb-4">{notice.title}</h2>
          
          <div className="text-sm text-gray-500 mb-8">
            {new Date(notice.createdAt).toLocaleDateString()}
          </div>
          
          <div className="prose max-w-none">
            <p className="whitespace-pre-wrap text-gray-600 leading-relaxed">
              {notice.content}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}