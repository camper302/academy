const programs = [
    {
      title: '초등 영어',
      description: '기초부터 탄탄한 영어 실력을 쌓아가는 초등학생 맞춤 프로그램',
      features: ['파닉스', '기초 문법', '독해력 향상', '말하기 훈련'],
    },
    {
      title: '중등 영어',
      description: '내신과 수행평가에 대비하는 체계적인 중등 영어 프로그램',
      features: ['내신 대비', '문법 심화', '독해 전략', '작문 실력 향상'],
    },
    {
      title: '고등 영어',
      description: '수능과 내신을 동시에 준비하는 효율적인 고등 영어 프로그램',
      features: ['수능 영어', '내신 완성', '독해 마스터', '실전 모의고사'],
    },
  ];
  
  export default function ProgramSection() {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">교육 프로그램</h2>
            <p className="mt-4 text-lg text-gray-600">
              학년별 맞춤 교육으로 최적의 학습 효과를 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8"> {/* 여백 추가 */}
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
              강의 시간표 보기
            </button>
            </div>
        </div>
      </section>
      
    );
  }