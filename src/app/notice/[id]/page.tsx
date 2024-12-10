'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Notice } from '@/types/notice';

export default function NoticePage() {
  const { id } = useParams();
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await fetch(`/api/notices/${id}`);
        if (!response.ok) throw new Error('공지사항을 불러오는데 실패했습니다');
        const data = await response.json();
        setNotice(data);
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchNotice();
  }, [id]);

  if (!notice) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">{notice.title}</h1>
          <div className="text-sm text-gray-500">
            {new Date(notice.createdAt!).toLocaleDateString()}
            {notice.isEmergency && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                긴급
              </span>
            )}
          </div>
        </div>
        <div className="prose max-w-none">
          <p className="whitespace-pre-wrap">{notice.content}</p>
        </div>
      </div>
    </div>
  );
}
