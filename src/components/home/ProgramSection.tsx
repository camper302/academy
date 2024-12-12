'use client';

/**
 * 홈페이지 메인의 프로그램 섹션 컴포넌트
 * - 초등/중등/고등 프로그램 카드 형태로 표시
 */
import Link from 'next/link';

const ProgramSection = () => {
  const programs = [
    {
      title: '초등영어',
      description: '기초부터 탄탄한 영어 실력 향상',
      link: '/programs?grade=초등'  // 기존 페이지의 쿼리 파라미터 형식에 맞춤
    },
    {
      title: '중등영어',
      description: '체계적인 중등 영어 교육',
      link: '/programs?grade=중등'
    },
    {
      title: '고등영어',
      description: '수능 대비 맞춤형 교육',
      link: '/programs?grade=고등'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">교육 프로그램</h2>
        <p className="text-center text-gray-600 mb-12">
          학년별 맞춤 교육으로 최적의 학습 효과를 제공합니다
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <Link 
                href={program.link}
                className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                이동 버튼
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;