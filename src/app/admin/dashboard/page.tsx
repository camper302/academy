'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { FiFileText, FiCalendar, FiClipboard } from 'react-icons/fi'

export default function Dashboard() {
  const menuItems = [
    { title: '공지사항 관리', href: '/admin/notices', icon: <FiFileText className="w-6 h-6" /> },
    { title: '강의 시간표 관리', href: '/admin/timetable', icon: <FiCalendar className="w-6 h-6" /> },
    { title: '레벨 테스트 예약 관리', href: '/admin/level-tests', icon: <FiClipboard className="w-6 h-6" /> },
  ]

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: '/' })
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error)
    }
  }

  return (
    <div className="admin-layout min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">관리자 대시보드</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-full flex items-center gap-2 transition-colors duration-200"
          >
            로그아웃
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center"
            >
              <div className="text-gray-600 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-medium text-gray-900">{item.title}</h3>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}