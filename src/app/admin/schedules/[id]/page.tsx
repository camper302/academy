'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ScheduleForm from '@/components/admin/ScheduleForm';
import type { Schedule } from '@/types/schedule';

export default function EditSchedule({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [schedule, setSchedule] = useState<(Schedule & { _id?: string }) | null>(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch(`/api/schedules/${params.id}`);
        const result = await response.json();
        if (result.success) {
          setSchedule(result.data);
        }
      } catch (error) {
        console.error('시간표 조회 실패:', error);
        alert('시간표 조회에 실패했습니다.');
      }
    };

    fetchSchedule();
  }, [params.id]);

  const handleSubmit = async (data: Schedule) => {
    try {
      const response = await fetch(`/api/schedules/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        alert('시간표가 수정되었습니다.');
        router.push('/admin/schedules');
      }
    } catch (error) {
      console.error('시간표 수정 실패:', error);
      alert('시간표 수정에 실패했습니다.');
    }
  };

  if (!schedule) return <div>로딩 중...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">시간표 수정</h1>
      <ScheduleForm onSubmit={handleSubmit} initialData={schedule} />
    </div>
  );
}
