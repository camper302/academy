'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react';
import Image from 'next/image';

// 네비게이션 아이템 타입 정의
interface NavigationItem {
  name: string;
  href: string;
}

// 네비게이션 메뉴 데이터
const navigation: NavigationItem[] = [
  { name: '학원소개', href: '/about' },
  { name: '초등영어', href: '/elementary' },
  { name: '중등영어', href: '/middle' },
  { name: '고등영어', href: '/high' },
  { name: "Song's Class", href: '/songs-class' },
  { name: '입시정보', href: '/admissions' },
  { name: '공지사항', href: '/notices' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
  };

  // 어드민 페이지인 경우 AdminHeader를 사용
  if (pathname.startsWith('/admin')) {
    // 로그인 페이지에서는 로고만 표시
    if (pathname === '/admin/login') {
      return (
        <header className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">관리자 대시보드</h1>
            </div>
          </div>
        </header>
      );
    }

    // 다른 관리자 페이지에서는 로고와 로그아웃 버튼 표시
    return (
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">관리자 대시보드</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-full flex items-center gap-2 transition-colors duration-200"
            >
              로그아웃
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 10a1 1 0 011-1h8.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L12.586 11H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
  }

  // 유저 페이지의 기존 헤더 렌더링
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">
              키움어학원
            </span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-gray-300'
                  } px-3 py-2 text-sm font-medium transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}