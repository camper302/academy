import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('Admin layout rendered'); // 디버깅용 로그
  return <div className="admin-layout">{children}</div>;
}
