'use client';

import { useEffect, useState } from 'react';
import { ScheduleWithId } from '@/types/schedule';

export default function ScheduleProgram() {
  const [schedules, setSchedules] = useState<ScheduleWithId[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<ScheduleWithId['grade']>('초등');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/schedules');
        const result = await response.json();
        
        if (!response.ok) {
          throw new Error(result.error || '시간표 데이터를 불러오는데 실패했습니다.');
        }

        if (!result.success || !Array.isArray(result.data)) {
          throw new Error('잘못된 데이터 형식입니다.');
        }

        setSchedules(result.data);
      } catch (error) {
        console.error('시간표 조회 실패:', error);
        setError(
          error instanceof Error 
            ? error.message 
            : '데이터 로딩 중 오류가 발생했습니다.'
        );
        setSchedules([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSchedules();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-500">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  const filteredSchedules = schedules.filter(
    (schedule) => schedule.grade === selectedGrade
  );

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <select 
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value as ScheduleWithId['grade'])}
          className="p-2 border rounded bg-white shadow-sm"
        >
          <option value="초등">초등부</option>
          <option value="중등">중등부</option>
          <option value="고등">고등부</option>
        </select>
      </div>
      
      <div className="overflow-x-auto">
        {filteredSchedules.length > 0 ? (
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-50">
              <tr>
                <th className="border p-3 text-left">요일</th>
                <th className="border p-3 text-left">시간</th>
                <th className="border p-3 text-left">수업명</th>
                <th className="border p-3 text-left">담당 선생님</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedules.map((schedule) => (
                <tr key={schedule._id} className="hover:bg-gray-50">
                  <td className="border p-3">{schedule.dayOfWeek}</td>
                  <td className="border p-3">{`${schedule.startTime}-${schedule.endTime}`}</td>
                  <td className="border p-3">{schedule.className}</td>
                  <td className="border p-3">{schedule.teacher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-8 text-gray-500">
            해당 학년의 시간표가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}