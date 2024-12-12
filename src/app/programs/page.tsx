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

import TabNavigation from '@/components/common/TabNavigation';
import { useState } from 'react';
import ElementaryProgram from '@/components/programs/ElementaryProgram';
import MiddleProgram from '@/components/programs/MiddleProgram';
import HighProgram from '@/components/programs/HighProgram';
import ScheduleProgram from '@/components/programs/ScheduleProgram';

// 탭 ID 타입 정의
type ProgramTabId = 'elementary' | 'middle' | 'high';

export default function ProgramsPage() {
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

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as ProgramTabId);
  };

  return (
    <main className="bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-4">교육 프로그램</h1>
          <p className="text-center text-gray-600">
            기우음 영어학원의 체계적인 교육 프로그램을 소개합니다
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