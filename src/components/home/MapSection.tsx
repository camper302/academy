/**
 * 지도 섹션 컴포넌트
 * 위치: kiwoom-academy/my-app/src/components/home/MapSection.tsx
 * 
 * @description
 * - 홈페이지의 지도 섹션을 표시하는 컴포넌트
 * - 학원 위치 정보와 지도를 함께 표시
 */

'use client';

import Map from '@/components/common/Map';
import { ACADEMY_LOCATION } from '@/constants/location';

export default function MapSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">오시는 길</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">{ACADEMY_LOCATION.name}</h3>
            <p className="text-gray-600 mb-2">{ACADEMY_LOCATION.address}</p>
            <p className="text-gray-600 mb-6">전화: {ACADEMY_LOCATION.phone}</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">지하철</h4>
                <p className="text-gray-600">{ACADEMY_LOCATION.transportation.subway}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">버스</h4>
                <p className="text-gray-600">{ACADEMY_LOCATION.transportation.bus}</p>
              </div>
            </div>
          </div>
          
          <div className="h-[400px]">
            <Map 
              height="400px"
              latitude={ACADEMY_LOCATION.coordinates.latitude}
              longitude={ACADEMY_LOCATION.coordinates.longitude}
              level={ACADEMY_LOCATION.map.level}
            />
          </div>
        </div>
      </div>
    </section>
  );
}