'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaYoutube, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa'
import { SiNaver } from 'react-icons/si'
import { motion } from 'framer-motion'

const contactInfo = {
  phone: '031-373-7094',
  hours: {
    weekday: '평일: 11:00 ~ 22:00',
    weekend: '주말, 공휴일: 10:00 ~ 17:00'
  },
  address: '경기 화성시 영배대실길 7(오션더블 3층,4층)',
  companyInfo: {
    name: '동탄키움어학원',
    fullAddress: '경기도 화성시 영배대실길 7 301호, 401호(목동, 오션더워)',
    representative: '홍길동',
    businessNumber: '161-94-01716',
    academyNumber: '제4965호',
    onlineBusinessNumber: '제2021-화성동탄-2007호'
  }
}

const socialLinks = [
  { icon: FaYoutube, href: '#', label: '유튜브' },
  { icon: FaFacebookF, href: '#', label: '페이스북' },
  { icon: FaInstagram, href: '#', label: '인스타그램' },
  { icon: SiNaver, href: '#', label: '네이버 블로그' }
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 상단 정보 섹션 */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
            {/* 왼쪽: 연락처 및 영업시간 정보 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl">
                  <FaPhoneAlt className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">대표전화</p>
                  <h2 className="text-3xl font-bold text-gray-900">{contactInfo.phone}</h2>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-2 rounded-xl mt-1">
                    <FaClock className="text-blue-600 w-4 h-4" />
                  </div>
                  <div className="text-gray-600">
                    <p>{contactInfo.hours.weekday}</p>
                    <p>{contactInfo.hours.weekend}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-2 rounded-xl mt-1">
                    <FaMapMarkerAlt className="text-blue-600 w-4 h-4" />
                  </div>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            </motion.div>

            {/* 오른쪽: 오시는 길 및 시간표 보기 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <Link 
                href="/programs?tab=schedule" 
                className="group block p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <FaClock className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                        강의 시간표
                      </h3>
                      <p className="text-gray-500">수업 시간 확인하기</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link 
                href="/about?tab=location" 
                className="group block p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                        오시는 길
                      </h3>
                      <p className="text-gray-500">지도로 위치 확인하기</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 하단 정보 */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="space-y-8">
            {/* 회사 정보 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                {contactInfo.companyInfo.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                <p>주소: {contactInfo.companyInfo.fullAddress}</p>
                <p>전화번호: {contactInfo.phone}</p>
                <p>대표자: {contactInfo.companyInfo.representative}</p>
                <p>사업자 등록 번호: {contactInfo.companyInfo.businessNumber}</p>
                <p>학원등록번호: {contactInfo.companyInfo.academyNumber}</p>
                <p>통신판매업신고번호: {contactInfo.companyInfo.onlineBusinessNumber}</p>
              </div>
            </div>

            {/* 저작권 및 소셜 미디어 */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                Copyright &copy; {new Date().getFullYear()} {contactInfo.companyInfo.name}. All rights reserved.
              </p>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="group"
                      aria-label={social.label}
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}