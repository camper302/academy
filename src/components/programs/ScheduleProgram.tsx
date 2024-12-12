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
    <div className="max-w-7xl mx-auto">
      {/* 시간표 필터 */}
      <div className="mb-8">
        <div className="inline-block relative">
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value as ScheduleWithId['grade'])}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-6 py-3 pr-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
          >
            <option value="초등">초등부</option>
            <option value="중등">중등부</option>
            <option value="고등">고등부</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 시간표 테이블 */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        {filteredSchedules.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">요일</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">시간</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">수업명</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">담당 선생님</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSchedules.map((schedule) => (
                <tr key={schedule._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.dayOfWeek}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{`${schedule.startTime}-${schedule.endTime}`}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.className}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.teacher}</td>
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

      {/* 안내 메시지 */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-600">
          * 시간표는 학기별로 변경될 수 있으며, 자세한 사항은 학원으로 문의해 주시기 바랍니다.
        </p>
      </div>
    </div>
  );
}