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
    pauseOnHover: true,
  };

  return (
    <section className="py-16 bg-white">
    </section>
  );
}