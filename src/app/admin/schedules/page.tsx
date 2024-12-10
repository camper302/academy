'use client';

import { useState, useEffect } from 'react';
import ScheduleForm from '@/components/admin/ScheduleForm';
import ScheduleItem from '@/components/admin/ScheduleItem';
import type { Schedule, ScheduleWithId } from '@/types/schedule';

export default function ScheduleManagement() {
  const [schedules, setSchedules] = useState<ScheduleWithId[]>([]);
  const [editingSchedule, setEditingSchedule] = useState<ScheduleWithId | null>(null);

  // 시간표 목록 조회
  const fetchSchedules = async () => {
    try {
      const response = await fetch('/api/schedules');
      const result = await response.json();
      if (result.success) {
        setSchedules(result.data);
      }
    } catch (error) {
      console.error('시간표 조회 실패:', error);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  // 시간표 등록/수정
  const handleSubmit = async (data: Schedule) => {
    try {
      const url = editingSchedule 
        ? `/api/schedules/${editingSchedule._id}`
        : '/api/schedules';
        
      const response = await fetch(url, {
        method: editingSchedule ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        alert(editingSchedule ? '시간표가 수정되었습니다.' : '시간표가 등록되었습니다.');
        setEditingSchedule(null);
        fetchSchedules();
      }
    } catch (error) {
      console.error('시간표 저장 실패:', error);
      alert('시간표 저장에 실패했습니다.');
    }
  };

  // 시간표 삭제
  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const response = await fetch(`/api/schedules/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (result.success) {
        alert('시간표가 삭제되었습니다.');
        fetchSchedules();
      }
    } catch (error) {
      console.error('시간표 삭제 실패:', error);
      alert('시간표 삭제에 실패했습니다.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {editingSchedule ? '시간표 수정' : '시간표 관리'}
      </h1>
      
      <div className="mb-8">
        <ScheduleForm 
          onSubmit={handleSubmit}
          initialData={editingSchedule || undefined}
        />
        {editingSchedule && (
          <button
            onClick={() => setEditingSchedule(null)}
            className="mt-2 text-sm text-gray-600 hover:text-gray-800"
          >
            등록 폼으로 돌아가기
          </button>
        )}
      </div>

      <div className="space-y-4">
        {schedules.map((schedule) => (
          <ScheduleItem
            key={schedule._id}
            schedule={schedule}
            onEdit={setEditingSchedule}    
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}