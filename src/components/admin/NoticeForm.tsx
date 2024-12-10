'use client';

import { useEffect, useState } from 'react';
import { NoticeFormData } from '@/types/notice';

interface NoticeFormProps {
  onSubmit: (data: NoticeFormData) => void;
  initialData?: NoticeFormData;
}

export default function NoticeForm({ onSubmit, initialData }: NoticeFormProps) {
  const [formData, setFormData] = useState<NoticeFormData>(
    initialData || {
      title: '',
      content: '',
      priority: 0,
      isEmergency: false,
      isPopup: false,
    }
  );

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // 폼 초기화
    setFormData({
      title: '',
      content: '',
      priority: 0,
      isEmergency: false,
      isPopup: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">제목</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">내용</label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="flex items-center space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">우선순위</label>
          <input
            type="number"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: Number(e.target.value) })}
            className="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            min="0"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={formData.isEmergency}
            onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label className="ml-2 text-sm text-gray-700">긴급 공지</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={formData.isPopup}
            onChange={(e) => setFormData({ ...formData, isPopup: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label className="ml-2 text-sm text-gray-700">팝업 표시</label>
        </div>
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
