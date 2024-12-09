'use client'
import Link from 'next/link'
import KakaoMap from './Map'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">동탄 영어 학원</h3>
            <p className="text-gray-400">
              최고의 영어 교육을 제공하는 동탄 지역 대표 영어 학원입니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="text-gray-400">
              <p>주소: 경기도 화성시 동탄</p>
              <p>전화: 031-XXX-XXXX</p>
              <p>이메일: info@example.com</p>
            </div>
            <div className="mt-4">
              <a 
                href="#"
                className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                카카오 채널 추가
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">오시는 길</h3>
            <KakaoMap 
              height="300px"
              className="shadow-lg"
              level={5}
            />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ul className="space-y-2">
              {['프로그램', '공지사항', '레벨테스트', '오시는 길'].map((item) => (
                <li key={item}>
                  <Link href="/" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-sm">
              <p>운영시간: 평일 09:00 - 22:00</p>
              <p>토요일 09:00 - 18:00</p>
              <p>일요일 휴무</p>
            </div>
          </div>
          <p>© 2024 동탄 영어 학원. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}