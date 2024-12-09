import { redirect } from 'next/navigation'

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    console.log('Admin page accessed'); // 디버깅용 로그
    router.push('/admin/login');
  }, [router]);

  // 리다이렉트 되기 전까지 보여줄 로딩 상태
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p>리다이렉트 중...</p>
      </div>
    </div>
  );
}
