'use client'

import { useEffect, useState, ChangeEvent } from 'react'
import { useParams } from 'next/navigation'

export default function EditNoticePage() {
  const { id } = useParams();
  const [notice, setNotice] = useState({ title: '', content: '' });

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await fetch(`/api/notices/${id}`);
        if (!response.ok) throw new Error('공지사항을 불러오는데 실패했습니다');
        const data = await response.json();
        console.log('Fetched data:', data); // 데이터 확인
        setNotice(data);
      } catch (error) {
        console.error('에러:', error);
      }
    };
    
    fetchNotice();
  }, [id]);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNotice({ ...notice, title: e.target.value });
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNotice({ ...notice, content: e.target.value });
  };

  return (
    <div>
      <h1>공지사항 수정</h1>
      <input
        type="text"
        value={notice.title}
        onChange={handleTitleChange}
        placeholder="제목"
      />
      <textarea
        value={notice.content}
        onChange={handleContentChange}
        placeholder="내용"
      />
      {/* 저장 버튼 및 기타 UI 요소 */}
    </div>
  );
}