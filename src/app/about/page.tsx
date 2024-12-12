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
    if (tab && ['intro', 'facilities', 'location'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/about?tab=${tabId}`);
  };

  return (
    <main className="bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-4">학원소개</h1>
          <p className="text-center text-gray-600">
            기우음 영어학원의 특별한 교육 철학을 소개합니다
          </p>
        </div>
      </div>

      <TabNavigation
        tabs={tabs.map(({ id, label }) => ({ id, label }))}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {tabs.find(tab => tab.id === activeTab)?.component}
      </div>
    </main>
  );
}