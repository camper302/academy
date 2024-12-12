'use client'
import Link from 'next/link'
import KakaoMap from './Map'
import { FaYoutube, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa'
import { SiNaver } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      {/* 상단 정보 섹션 */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-[1fr_2fr] gap-8 items-start">
            {/* 왼쪽: 연락처 및 영업시간 정보 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary w-6 h-6" />
                <h2 className="text-3xl font-bold">031-373-7094</h2>
              </div>
              <div className="ml-9 space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <FaClock className="text-gray-400" />
                  <div>
                    <p>평일: 11:00 ~ 22:00</p>
                    <p>주말, 공휴일: 10:00 ~ 17:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-400" />
                  <p>경기 화성시 영배대실길 7(오션더블 3층,4층)</p>
                </div>
              </div>
            </div>

            {/* 오른쪽: 오시는 길 링크 */}
            <Link 
              href="/about?tab=location" 
              className="group flex items-center justify-between p-6 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold text-lg group-hover:text-primary transition-colors">오시는 길</p>
                  <p className="text-gray-500">지도로 위치 확인하기</p>
                </div>
              </div>
              <span className="text-primary text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 하단 정보 */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* 회사 정보 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">동탄키움어학원</h3>
              <div className="flex gap-4 text-sm text-gray-400 flex-wrap">
                <p>주소: 경기도 화성시 영배대실길 7 301호, 401호(목동, 오션더워)</p>
                <span>|</span>
                <p>전화번호: 031-373-7094</p>
                <span>|</span>
                <p>대표자: 홍길동</p>
                <span>|</span>
                <p>사업자 등록 번호: 161-94-01716</p>
                <span>|</span>
                <p>학원등록번호: 제4965호</p>
                <span>|</span>
                <p>통신판매업신고번호: 제2021-화성동탄-2007호</p>
              </div>
            </div>

            {/* 저작권 및 소셜 미디어 */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                Copyright © 2024 DYB Chosun Language Institute. All rights reserved.
              </p>
              <div className="flex gap-6">
                <FaYoutube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <FaFacebookF className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <FaInstagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <SiNaver className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}