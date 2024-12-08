'use client'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    kakao: any;
  }
}

export default function IntroSection() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao && mapRef.current) {
        const options = {
          center: new window.kakao.maps.LatLng(37.2156, 127.0726), // 동탄 좌표
          level: 3
        };
        const map = new window.kakao.maps.Map(mapRef.current, options);
        const marker = new window.kakao.maps.Marker({
          position: options.center
        });
        marker.setMap(map);
      }
    };

    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
    script.onload = () => window.kakao.maps.load(loadKakaoMap);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              최고의 영어 교육을 제공하는<br />
              동탄 영어 학원
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              체계적인 커리큘럼과 전문 강사진이 여러분의 영어 실력 향상을 도와드립니다.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
              무료 레벨테스트 신청
            </button>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <div ref={mapRef} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}