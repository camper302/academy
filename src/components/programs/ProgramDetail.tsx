/**
 * 프로그램 상세 컴포넌트
 * 위치: kiwoom-academy/my-app/src/components/programs/ProgramDetail.tsx
 * - 선택된 학년의 프로그램 상세 정보 표시
 * - 프로그램 설명과 커리큘럼 포함
 */
import { useState } from 'react';
import type { ScheduleWithId } from '@/types/schedule';

interface ProgramDetailProps {
  grade: '초등' | '중등' | '고등';
  schedules: ScheduleWithId[];
}

const ProgramDetail = ({ grade, schedules }: ProgramDetailProps) => {
  const programContents = {
    '초등': {
      title: '초등영어 프로그램',
      description: '기초부터 탄탄한 영어 실력 향상',
      features: [
        '파닉스와 기초 문법',
        '읽기와 쓰기 기초',
        '말하기 자신감 향상'
      ],
      curriculum: [
        '1단계: 알파벳과 파닉스',
        '2단계: 기초 문법과 단어',
        '3단계: 기초 회화와 작문'
      ]
    },
    '중등': {
      title: '중등영어 프로그램',
      description: '체계적인 중등 영어 교육',
      features: [
        '내신 대비 문법',
        '독해력 향상',
        '말하기와 쓰기 심화'
      ],
      curriculum: [
        '1단계: 중등 필수 문법',
        '2단계: 독해와 어휘',
        '3단계: 실전 영작과 회화'
      ]
    },
    '고등': {
      title: '고등영어 프로그램',
      description: '수능 대비 맞춤형 교육',
      features: [
        '수능 영어 대비',
        '심화 독해',
        '실전 모의고사'
      ],
      curriculum: [
        '1단계: 수능 필수 문법',
        '2단계: 수능 독해 전략',
        '3단계: 실전 모의고사'
      ]
    }
  };

  const content = programContents[grade];

  return (
    <div className="space-y-8">
      {/* 프로그램 소개 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
        <p className="text-gray-600 mb-6">{content.description}</p>
        
        {/* 주요 특징 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">프로그램 특징</h3>
          <ul className="space-y-3">
            {content.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* 커리큘럼 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">커리큘럼</h3>
          <div className="space-y-4">
            {content.curriculum.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 시간표 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">수업 시간표</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="border p-3 bg-gray-50">요일</th>
                <th className="border p-3 bg-gray-50">시간</th>
                <th className="border p-3 bg-gray-50">수업명</th>
                <th className="border p-3 bg-gray-50">담당 교사</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => (
                <tr key={index}>
                  <td className="border p-3">{schedule.dayOfWeek}</td>
                  <td className="border p-3">{`${schedule.startTime}-${schedule.endTime}`}</td>
                  <td className="border p-3">{schedule.className}</td>
                  <td className="border p-3">{schedule.teacher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
