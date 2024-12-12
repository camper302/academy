'use client';

import AboutIntro from '@/components/about/AboutIntro';
import AboutFacilities from '@/components/about/AboutFacilities';
import AboutLocation from '@/components/about/AboutLocation';
import TabNavigation from '@/components/common/TabNavigation';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', label: '학원소개', component: <AboutIntro /> },
    { id: 'facilities', label: '시설안내', component: <AboutFacilities /> },
    { id: 'location', label: '오시는 길', component: <AboutLocation /> },
  ];

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/about?tab=${tabId}`);
  };

  const activeComponent = tabs.find(tab => tab.id === activeTab)?.component || tabs[0].component;

  return (
    <main className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">학원소개</h1>
          <p className="text-xl text-gray-700">
            기우음 영어학원의 특별한 교육 철학과 비전을 소개합니다
          </p>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* 컨텐츠 영역 */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeComponent}
      </div>
    </main>
  );
}