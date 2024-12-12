'use client'

import dynamic from 'next/dynamic';
import { ACADEMY_LOCATION } from '@/constants/location';

const KakaoMap = dynamic(() => import('./KakaoMapScript'), {
  ssr: false,
  loading: () => (
    <div className="h-full bg-gray-100 flex items-center justify-center">
      <p className="text-gray-500">지도를 불러오는 중...</p>
    </div>
  )
});

interface MapProps {
  width?: string;
  height?: string;
  className?: string;
  latitude?: number;
  longitude?: number;
  level?: number;
  markerTitle?: string;
}

export default function Map({ 
  width = '100%', 
  height = '240px',
  className = '',
  latitude = ACADEMY_LOCATION.coordinates.latitude,
  longitude = ACADEMY_LOCATION.coordinates.longitude,
  level = ACADEMY_LOCATION.map.level,
  markerTitle = ACADEMY_LOCATION.map.markerTitle,
}: MapProps) {
  return (
    <div 
      className={`rounded-lg overflow-hidden bg-gray-100 relative ${className}`}
      style={{ width, height }}
    >
      <KakaoMap 
        latitude={latitude}
        longitude={longitude}
        level={level}
        markerTitle={markerTitle}
      />
    </div>
  );
}