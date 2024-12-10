'use client';

import { useSession } from 'next-auth/react';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // 로그인 페이지일 경우 인증 체크를 하지 않음
  if (pathname === '/admin/login') {
    return children;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="admin-layout min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-6">
        {children}
      </main>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminLayoutContent>{children}</AdminLayoutContent>
  );
}