'use client';

import AboutIntro from '@/components/about/AboutIntro';
import AboutFacilities from '@/components/about/AboutFacilities';
import AboutLocation from '@/components/about/AboutLocation';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type AboutTabId = 'intro' | 'facilities' | 'location';

export default function AboutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<AboutTabId>('intro');

  const tabs = [
    { id: 'intro' as const, label: '학원소개', component: <AboutIntro /> },
    { id: 'facilities' as const, label: '시설안내', component: <AboutFacilities /> },
    { id: 'location' as const, label: '오시는 길', component: <AboutLocation /> },
  ];

  useEffect(() => {
    const tab = searchParams.get('tab');

    if(tab && ['intro', 'facilities', 'location'].includes(tab)) {
      setActiveTab(tab as AboutTabId);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    const newTab = tabId as AboutTabId;
    setActiveTab(newTab);
    router.push(`/about?tab=${newTab}`);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">학원소개</h1>
          <p className="text-xl text-gray-700">
            키움어학원의 특별한 교육 철학과 비전을 소개합니다
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
                  hover:bg-gray-50
                  ${activeTab === tab.id 
                    ? 'text-blue-600 border-b-2 border-blue-600 font-medium' 
                    : 'text-gray-600'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

     {/* 컨텐츠 영역 */}
     <div className="max-w-7xl mx-auto px-4 py-12">
        {tabs.find(tab => tab.id === activeTab)?.component}
      </div>
    </main>
  );
}