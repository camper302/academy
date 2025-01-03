'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const menuItems = [
    { label: '홈', href: '/' },
    { 
      label: '학원소개', 
      href: '/about',
      subTabs: [
        { id: 'intro', label: '학원소개', href: '/about?tab=intro' },
        { id: 'facilities', label: '시설안내', href: '/about?tab=facilities' },
        { id: 'location', label: '오시는 길', href: '/about?tab=location' },
      ]
    },
    { 
      label: '프로그램', 
      href: '/programs',
      subTabs: [
        { id: 'elementary', label: '초등부', href: '/programs?tab=elementary' },
        { id: 'middle', label: '중등부', href: '/programs?tab=middle' },
        { id: 'high', label: '고등부', href: '/programs?tab=high' },
        { id: 'schedule', label: '강의시간표', href: '/programs?tab=schedule' }
      ]
    },
    { label: '레벨테스트예약', href: '/level-test' },
    { label: '공지사항', href: '/notice' }
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.includes('?')) {
      const [path, query] = href.split('?');
      const [param, value] = query.split('=');
      return pathname === path && searchParams.get(param) === value;
    }
    return pathname === href;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* 로고 */}
            <Link href="/" className="relative z-50">
              <Image
                src="/images/logo.png"
                alt="Kiwoom Academy Logo"
                width={180}
                height={40}
                className="w-auto h-10 md:h-12"
              />
            </Link>

            {/* 햄버거 메뉴 버튼 */}
            <div className="relative z-50">
              <button
                className="relative flex items-center justify-center w-[80px] h-[80px] group"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="메인 메뉴"
              >
                <div className="flex flex-col justify-between w-[40px] h-[22px] transform transition-all duration-300">
                  <span className={`block w-full h-[2px] bg-gray-800 origin-left transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-x-[4px] translate-y-[-3px] w-[42px]' : ''
                  }`} />
                  <span className={`block w-[32px] h-[2px] bg-gray-800 ml-auto transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0 translate-x-4' : ''
                  }`} />
                  <span className={`block w-full h-[2px] bg-gray-800 origin-left transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 translate-x-[4px] translate-y-[3px] w-[42px]' : ''
                  }`} />
                </div>
                <div className="absolute inset-0 rounded-full transition-colors duration-300 group-hover:bg-gray-100/50" />
              </button>

              {/* 드롭다운 메뉴 */}
              <div 
                className={`fixed right-0 top-[80px] md:top-[96px] w-full md:w-[480px] h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] bg-white shadow-lg transform transition-all duration-200 origin-top-right overflow-y-auto ${
                  isMenuOpen 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full pointer-events-none'
                }`}
              >
                <nav className="p-6">
                  <ul className="space-y-2">
                    {menuItems.map((item) => (
                      <li key={item.label}>
                        {item.subTabs ? (
                          <div className="relative">
                            <button
                              onClick={() => setActiveSubmenu(activeSubmenu === item.label ? '' : item.label)}
                              className={`w-full flex items-center justify-between px-6 py-4 rounded-xl text-left transition-colors ${
                                activeSubmenu === item.label
                                  ? 'bg-blue-50 text-blue-600'
                                  : 'hover:bg-gray-50 text-gray-700'
                              }`}
                            >
                              <span className="font-medium text-lg">{item.label}</span>
                              <svg
                                className={`w-5 h-5 transition-transform duration-200 ${
                                  activeSubmenu === item.label ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>

                            {/* 서브메뉴 - 계층형 구조 */}
                            <div 
                              className={`overflow-hidden transition-all duration-200 ${
                                activeSubmenu === item.label
                                  ? 'max-h-[400px] opacity-100'
                                  : 'max-h-0 opacity-0'
                              }`}
                            >
                              <ul className="mt-2 ml-4 space-y-1 border-l-2 border-blue-100">
                                {item.subTabs.map((subTab) => (
                                  <li key={subTab.id}>
                                    <Link
                                      href={subTab.href}
                                      className={`block px-6 py-3 rounded-xl transition-colors ${
                                        isActive(subTab.href)
                                          ? 'bg-blue-50 text-blue-600'
                                          : 'hover:bg-gray-50 text-gray-700'
                                      }`}
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveSubmenu('');
                                      }}
                                    >
                                      <span className="text-lg">{subTab.label}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={`block px-6 py-4 rounded-xl transition-colors ${
                              isActive(item.href)
                                ? 'bg-blue-50 text-blue-600'
                                : 'hover:bg-gray-50 text-gray-700'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="text-lg">{item.label}</span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* 배경 오버레이 */}
              {isMenuOpen && (
                <div 
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ zIndex: -1 }}
                />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
