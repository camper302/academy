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

export default function KakaoMap({ 
  width = '100%', 
  height = '200px',
  className = '',
  latitude = 37.2156,
  longitude = 127.0726,
  level = 3,
  markerTitle = '동탄 영어 학원'
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

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:5px;">${markerTitle}</div>`
        });
        infowindow.open(mapInstance.current, marker);
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
        // 지도 인스턴스 정리
        mapInstance.current = null;
      }
    };
  }, [latitude, longitude, level, markerTitle]);

  return (
    <div 
      ref={mapRef}
      className={`rounded-lg overflow-hidden bg-gray-100 relative ${className}`}
      style={{ width, height }}
    />
  );
}