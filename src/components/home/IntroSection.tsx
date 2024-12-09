'use client'
import KakaoMap from '../common/Map'

export default function IntroSection() {
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
              레벨 테스트 신청
            </button>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
            {/* 지도 대신 다른 콘텐츠나 이미지를 넣을 수 있습니다 */}
          </div>
        </div>
      </div>
    </section>
  );
}