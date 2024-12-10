'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const slides = [
  {
    image: '/images/intro/slide1.jpg',
    title: '키움 아카데미에 오신 것을 환영합니다',
    description: '최고의 교육 프로그램으로 여러분의 미래를 준비하세요',
    buttonText: '학원 소개'
  },
  {
    image: '/images/intro/slide2.jpg',
    title: '체계적인 교육 프로그램',
    description: '초등, 중등, 고등 맞춤형 교육 커리큘럼',
    buttonText: '프로그램 보기'
  },
  {
    image: '/images/intro/slide3.jpg',
    title: '무료 레벨 테스트',
    description: '정확한 실력 진단으로 최적의 학습 방향을 제시합니다',
    buttonText: '레벨 테스트 신청'
  }
];

export default function IntroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true, // 마우스 오버 시 자동 재생 일시 정지
  };

  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Slider {...settings} className="h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative h-screen">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                  <p className="text-xl mb-8">{slide.description}</p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slick-slider,
        .slick-list,
        .slick-track {
          height: 100%;
        }
        .slick-slide > div {
          height: 100%;
        }
        .slick-dots {
          bottom: 25px;
          z-index: 10;
        }
        .slick-dots li button:before {
          color: white;
        }
      `}</style>
    </section>
  );
}