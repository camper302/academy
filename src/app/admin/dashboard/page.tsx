'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { FiFileText, FiCalendar, FiClipboard } from 'react-icons/fi'

export default function Dashboard() {
  const menuItems = [
    { title: '공지사항 관리', href: '/admin/notices', icon: <FiFileText className="w-6 h-6" /> },
    { title: '강의 시간표 관리', href: '/admin/timetable', icon: <FiCalendar className="w-6 h-6" /> },
    { title: '레벨 테스트 예약 관리', href: '/admin/level-test', icon: <FiClipboard className="w-6 h-6" /> },
  ]

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: '/' })
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">관리자 대시보드</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            로그아웃
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center"
            >
              <div className="text-gray-600 mb-4">{item.icon}</div>
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}