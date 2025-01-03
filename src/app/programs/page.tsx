/**
 * 프로그램 상세 페이지
 * 위치: kiwoom-academy/my-app/src/app/programs/page.tsx
 * 
 * @description
 * - URL 쿼리 파라미터로 선택된 학년의 프로그램 정보 표시
 * - 탭 형식으로 학년별 프로그램 내용과 시간표 제공
 * - 홈페이지의 프로그램 섹션과 연동
 */
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ElementaryProgram from '@/components/programs/ElementaryProgram';
import MiddleProgram from '@/components/programs/MiddleProgram';
import HighProgram from '@/components/programs/HighProgram';
import ScheduleProgram from '@/components/programs/ScheduleProgram';

// 탭 ID 타입 정의
type ProgramTabId = 'elementary' | 'middle' | 'high' | 'schedule';

export default function ProgramsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<ProgramTabId>('elementary');

  const tabs = [
    { 
      id: 'elementary' as const, 
      label: '초등부',
      component: <ElementaryProgram />
    },
    { 
      id: 'middle' as const, 
      label: '중등부',
      component: <MiddleProgram />
    },
    { 
      id: 'high' as const, 
      label: '고등부',
      component: <HighProgram />
    },
    {
      id: 'schedule' as const,
      label: '시간표',
      component: <ScheduleProgram />
    }
  ];

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['elementary', 'middle', 'high', 'schedule'].includes(tab)) {
      setActiveTab(tab as ProgramTabId);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    const newTab = tabId as ProgramTabId;
    setActiveTab(newTab);
    router.push(`/programs?tab=${newTab}`);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 헤더 섹션 */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">교육 프로그램</h1>
          <p className="text-xl text-gray-700">
            키움어학원의 체계적인 교육 프로그램을 소개합니다
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