'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ProgramSection = () => {
  const programs = [
    {
      title: '초등영어',
      description: '기초부터 탄탄한 영어 실력 향상',
      features: ['체계적인 기초 문법', '영어 독해력 향상', '말하기/듣기 훈련'],
      link: '/programs?tab=elementary',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: '중등영어',
      description: '체계적인 중등 영어 교육',
      features: ['내신 성적 향상', '수준별 맞춤 학습', '영어 자신감 향상'],
      link: '/programs?tab=middle',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: '고등영어',
      description: '수능 대비 맞춤형 교육',
      features: ['수능 영어 완벽 대비', '학교별 내신 관리', '1:1 진학 상담'],
      link: '/programs?tab=high',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            교육 프로그램
          </h2>
          <p className="text-lg text-gray-600">
            학년별 맞춤 교육으로 최적의 학습 효과를 제공합니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl shadow-lg"></div>
              <Link href={program.link}>
                <div className="relative bg-white rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-300 p-8 h-full transform group-hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${program.color} text-white mb-6`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {program.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-medium">자세히 알아보기</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;