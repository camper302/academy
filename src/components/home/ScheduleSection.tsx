'use client';

import { useEffect, useState } from 'react';
import { Schedule } from '@/types/schedule';

export default function ScheduleSection() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<Schedule['grade']>('초등');

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await fetch('/api/schedules');
        const data = await response.json();
        setSchedules(data);
      } catch (error) {
        console.error('시간표 조회 실패:', error);
      }
    };
    fetchSchedules();
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">수업 시간표</h2>
        <div className="mb-4">
          <select 
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value as Schedule['grade'])}
            className="p-2 border rounded"
          >
            <option value="초등">초등</option>
            <option value="중등">중등</option>
            <option value="고등">고등</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="border p-2">요일</th>
                <th className="border p-2">시간</th>
                <th className="border p-2">수업명</th>
                <th className="border p-2">담당 선생님</th>
              </tr>
            </thead>
            <tbody>
              {schedules
                .filter(schedule => schedule.grade === selectedGrade)
                .map((schedule, index) => (
                  <tr key={index}>
                    <td className="border p-2">{schedule.dayOfWeek}</td>
                    <td className="border p-2">{`${schedule.startTime}-${schedule.endTime}`}</td>
                    <td className="border p-2">{schedule.className}</td>
                    <td className="border p-2">{schedule.teacher}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
