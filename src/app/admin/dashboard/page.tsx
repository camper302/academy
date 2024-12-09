'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function Dashboard() {
  const menuItems = [
    { title: '공지사항 관리', href: '/admin/notices', icon: '📢' },
    { title: '강의 시간표 관리', href: '/admin/timetable', icon: '📅' },
    { title: '레벨 테스트 예약 관리', href: '/admin/level-test', icon: '📝' },
  ]

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">관리자 페이지</h2>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          로그아웃
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}