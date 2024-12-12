/**
 * 메인 히어로 섹션 컴포넌트
 * - 배경 이미지와 메인 텍스트를 표시
 * - 학원 소개 버튼 포함
 */

'use client'; // 클라이언트 컴포넌트로 지정

import Image from 'next/image';
import { useState, useEffect } from 'react';


const MainHero = () => {
  // 기존 슬라이드 관련 상태와 로직 유지
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      video: "/videos/slide1.mp4",  // 비디오 파일 경로
      title: ["키움 아카데미와", "함께하는", "새로운 시대"],
      description: "체계적인 커리큘럼과 전문 강사진이 함께합니다"
    },
    {
      video: "/videos/slide2.mp4",
      title: ["글로벌", "인재 양성", "교육 프로그램"],
      description: "미래를 선도하는 영어 교육"
    },
    {
      video: "/videos/slide3.mp4",
      title: ["맞춤형", "교육 시스템으로", "최고의 결과"],
      description: "개인별 맞춤 학습 관리"
    }
  ];

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5초마다 변경

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 비디오 슬라이드 */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            >
              <source src={slide.video} type="video/mp4" />
            </video>
            {/* 오버레이 */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-[1] h-full container mx-auto px-4">
        <div className="h-full flex flex-col justify-center">
          <div className="space-y-6 text-white max-w-3xl">
            {slides[currentSlide].title.map((line, i) => (
              <h1 
                key={i} 
                className={`text-5xl md:text-7xl font-bold leading-tight ${
                  i === 2 ? 'text-blue-400' : ''
                }`}
              >
                {line}
              </h1>
            ))}
            <p className="text-xl md:text-2xl font-light mt-4">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* 좌측 스크롤 인디케이터 */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 text-white z-[2]">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-20 w-px bg-white/50"></div>
            <span className="text-sm font-medium tracking-widest whitespace-nowrap rotate-90 origin-center translate-x-6">
              SCROLL DOWN
            </span>
            <div className="h-20 w-px bg-white/50"></div>
          </div>
        </div>

        {/* 우측 슬라이드 인디케이터 */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-[2]">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                transition-all duration-300
                ${currentSlide === index 
                  ? 'w-12 h-1 bg-white' 
                  : 'w-6 h-1 bg-white/50 hover:bg-white/70'
                }
                rounded-full
              `}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainHero;
