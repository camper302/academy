/**
 * 메인 히어로 섹션 컴포넌트
 * - 배경 이미지와 메인 텍스트를 표시
 * - 학원 소개 버튼 포함
 */
const MainHero = () => {
  return (
    <section className="relative h-[600px] bg-gray-100">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          filter: 'brightness(0.8)'
        }}
      />
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          키움 아카데미에 오신 것을 환영합니다
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          최고의 교육 프로그램으로 여러분의 미래를 준비하세요
        </p>
        <a 
          href="/introduce" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          학원 소개
        </a>
      </div>
    </section>
  );
};

export default MainHero;
