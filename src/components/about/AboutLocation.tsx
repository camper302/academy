/**
 * 오시는 길 컴포넌트
 * 위치: kiwoom-academy/my-app/src/components/about/AboutLocation.tsx
 */

'use client';

import dynamic from 'next/dynamic';

// 동적 임포트로 변경
const KakaoMap = dynamic(() => import('@/components/common/KakaoMapScript'), {
  ssr: false, // 클라이언트 사이드에서만 렌더링
  loading: () => <div className="h-96 bg-gray-100">지도를 불러오는 중...</div>
});

export default function AboutLocation() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">오시는 길</h2>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">키움어학원</h3>
          <p className="text-gray-600 mb-2">경기도 화성시 동탄순환대로 127-17</p>
          <p className="text-gray-600">전화: 031-1234-5678</p>
        </div>
        
        <div className="h-96 rounded-lg overflow-hidden">
          <KakaoMap />
        </div>

        <div className="mt-8">
          <h4 className="font-bold mb-2">교통편 안내</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• 지하철: 동탄역 2번 출구에서 도보 5분</li>
            <li>• 버스: 동탄순환버스 27번, 동탄센트럴파크 정류장 하차</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
