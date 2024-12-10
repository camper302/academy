'use client';

import { useEffect, useState } from 'react';
import type { ScheduleWithId } from '@/types/schedule';

export default function ProgramSchedulePage() {
  const [schedules, setSchedules] = useState<{
    초등: ScheduleWithId[];
    중등: ScheduleWithId[];
    고등: ScheduleWithId[];
  }>({
    초등: [],
    중등: [],
    고등: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await fetch('/api/schedules');
        const result = await response.json();
        
        if (result.success) {
          // 학년별로 데이터 분류
          const grouped = result.data.reduce((acc: Record<string, ScheduleWithId[]>, schedule: ScheduleWithId) => {
            if (!acc[schedule.grade]) {
              acc[schedule.grade] = [];
            }
            acc[schedule.grade].push(schedule);
            return acc;
          }, {
            초등: [],
            중등: [],
            고등: [],
          });

          setSchedules(grouped);
        } else {
          console.error('시간표 조회 실패:', result.error);
        }
      } catch (error) {
        console.error('시간표를 불러오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  const renderScheduleTable = (gradeSchedules: ScheduleWithId[], grade: string) => {
    // 요일별로 시간표 그룹화
    const groupedByDay = gradeSchedules.reduce((acc, schedule) => {
      if (!acc[schedule.dayOfWeek]) {
        acc[schedule.dayOfWeek] = [];
      }
      acc[schedule.dayOfWeek].push(schedule);
      return acc;
    }, {} as Record<string, ScheduleWithId[]>);

    return (
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">{grade} 시간표</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-3 bg-gray-50">요일</th>
                <th className="border p-3 bg-gray-50">수업 시간</th>
                <th className="border p-3 bg-gray-50">수업명</th>
                <th className="border p-3 bg-gray-50">담당 교사</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupedByDay).map(([day, daySchedules]) => (
                <tr key={day}>
                  <td className="border p-3 text-center font-medium">{day}</td>
                  <td className="border p-3">
                    <div className="flex flex-col gap-2">
                      {daySchedules.map((schedule) => (
                        <span
                          key={schedule._id}
                          className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                        >
                          {schedule.startTime} - {schedule.endTime}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="border p-3">
                    <div className="flex flex-col gap-2">
                      {daySchedules.map((schedule) => (
                        <span key={schedule._id}>{schedule.className}</span>
                      ))}
                    </div>
                  </td>
                  <td className="border p-3">
                    <div className="flex flex-col gap-2">
                      {daySchedules.map((schedule) => (
                        <span key={schedule._id}>{schedule.teacher}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div className="text-center py-16">로딩 중...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">교육 프로그램 시간표</h1>
      
      {renderScheduleTable(schedules.초등, '초등 영어')}
      {renderScheduleTable(schedules.중등, '중등 영어')}
      {renderScheduleTable(schedules.고등, '고등 영어')}
    </div>
  );
}
