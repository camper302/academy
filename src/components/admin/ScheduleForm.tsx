'use client';

import { useEffect, useState } from 'react';
import type { Schedule } from '@/types/schedule';

interface ScheduleFormProps {
  onSubmit: (data: Schedule) => void;
  initialData?: Schedule;
}

// 시간 옵션 생성 함수
const generateTimeOptions = () => {
  const times: string[] = [];
  for (let hour = 9; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 10) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      times.push(timeString);
    }
  }
  return times;
};

const DAYS_OF_WEEK = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'] as const;

export default function ScheduleForm({ onSubmit, initialData }: ScheduleFormProps) {
  const [formData, setFormData] = useState<Schedule>(
    initialData || {
      grade: '초등',
      dayOfWeek: '',
      startTime: '',
      endTime: '',
      className: '',
      teacher: ''
    }
  );

  const timeOptions = generateTimeOptions();

  useEffect(() => {
    setFormData(initialData || {
      grade: '초등',
      dayOfWeek: '',
      startTime: '',
      endTime: '',
      className: '',
      teacher: ''
    });
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);

    if (!initialData) {
      setFormData({
        grade: '초등',
        dayOfWeek: '',
        startTime: '',
        endTime: '',
        className: '',
        teacher: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">학년</label>
        <select 
          value={formData.grade}
          onChange={(e) => setFormData({...formData, grade: e.target.value as Schedule['grade']})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="초등">초등</option>
          <option value="중등">중등</option>
          <option value="고등">고등</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">요일</label>
        <select
          value={formData.dayOfWeek}
          onChange={(e) => setFormData({...formData, dayOfWeek: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="">요일 선택</option>
          {DAYS_OF_WEEK.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">시작 시간</label>
          <select
            value={formData.startTime}
            onChange={(e) => setFormData({...formData, startTime: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">시작 시간 선택</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">종료 시간</label>
          <select
            value={formData.endTime}
            onChange={(e) => setFormData({...formData, endTime: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">종료 시간 선택</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">수업명</label>
        <input
          type="text"
          value={formData.className}
          onChange={(e) => setFormData({...formData, className: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">담당 선생님</label>
        <input
          type="text"
          value={formData.teacher}
          onChange={(e) => setFormData({...formData, teacher: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {initialData ? '수정하기' : '등록하기'}
      </button>
    </form>
  );
}