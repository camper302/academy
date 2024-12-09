'use client'
import { useEffect, useRef } from 'react'

interface MapProps {
  width?: string;
  height?: string;
  className?: string;
  latitude?: number;
  longitude?: number;
  level?: number;
  markerTitle?: string;
}

//37.1617865, 127.1102523
export default function KakaoMap({ 
  width = '100%', 
  height = '240px',
  className = '',
  latitude = 37.1617865,
  longitude = 127.1102523,
  level = 4,
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || !window.kakao?.maps) return;

      try {
        const coords = new window.kakao.maps.LatLng(latitude, longitude);
        const options = {
          center: coords,
          level
        };
        
        mapInstance.current = new window.kakao.maps.Map(mapRef.current, options);
        
        const marker = new window.kakao.maps.Marker({
          position: coords
        });
        marker.setMap(mapInstance.current);
      } catch (error) {
        console.error('카카오맵 초기화 중 오류 발생:', error);
      }
    };

    const waitForKakao = () => {
      if (window.kakao?.maps) {
        window.kakao.maps.load(initializeMap);
      } else {
        setTimeout(waitForKakao, 100);
      }
    };

    waitForKakao();

    return () => {
      if (mapInstance.current) {
        mapInstance.current = null;
      }
    };
  }, [latitude, longitude, level]);

  return (
    <div 
      ref={mapRef}
      className={`rounded-lg overflow-hidden bg-gray-100 relative ${className}`}
      style={{ width, height }}
    />
  );
}