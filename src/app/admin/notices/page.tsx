'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Notice, NoticeFormData } from '@/types/notice';
import NoticeForm from '@/components/admin/NoticeForm';
import NoticeItem from '@/components/admin/NoticeItem';

export default function NoticesManagement() {
  const { data: session } = useSession();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  
  // 공지사항 목록 조회
  const fetchNotices = async () => {
    const response = await fetch('/api/notices');
    const data = await response.json();
    setNotices(data);
  };

  // 공지사항 추가
  const handleAddNotice = async (formData: NoticeFormData) => {
    const response = await fetch('/api/notices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      fetchNotices();
    }
  };

  // 공지사항 수정
  const handleUpdateNotice = async (id: string, formData: NoticeFormData) => {
    const response = await fetch(`/api/notices/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      fetchNotices();
      setEditingNotice(null);
    }
  };

  // 공지사항 삭제
  const handleDeleteNotice = async (id: string) => {
    const response = await fetch(`/api/notices/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      fetchNotices();
    }
  };

  const handleEdit = (notice: Notice) => {
    setEditingNotice(notice);
  };

  const handleCancelEdit = () => {
    setEditingNotice(null);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">공지사항 관리</h1>
      
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">
          {editingNotice ? '공지사항 수정' : '새 공지사항 작성'}
        </h2>
        <NoticeForm
          onSubmit={editingNotice ? 
            (formData) => handleUpdateNotice(editingNotice._id!, formData) : 
            handleAddNotice
          }
          initialData={editingNotice || undefined}
        />
        {editingNotice && (
          <button
            onClick={handleCancelEdit}
            className="mt-2 text-sm text-gray-600 hover:text-gray-800"
          >
            수정 취소
          </button>
        )}
      </div>

      <div className="space-y-4">
        {notices.map((notice) => (
          <NoticeItem
            key={notice._id}
            notice={notice}
            onEdit={handleEdit}
            onDelete={handleDeleteNotice}
          />
        ))}
      </div>
    </div>
  );
}