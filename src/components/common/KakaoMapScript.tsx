'use client';

import { useEffect, useRef } from 'react';
import { KAKAO_MAP_CONFIG } from '@/constants/location';

interface KakaoMapProps {
  latitude?: number;
  longitude?: number;
  level?: number;
  markerTitle?: string;
}

export default function KakaoMap({
  latitude = KAKAO_MAP_CONFIG.defaultCenter.latitude,
  longitude = KAKAO_MAP_CONFIG.defaultCenter.longitude,
  level = KAKAO_MAP_CONFIG.defaultLevel,
  markerTitle = '키움 영어학원'
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        initializeMap();
      } else {
        scriptRef.current = document.createElement('script');
        scriptRef.current.async = true;
        scriptRef.current.src = `${KAKAO_MAP_CONFIG.scriptUrl}?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
        scriptRef.current.onload = () => {
          const maps = window.kakao.maps;
          maps.load(initializeMap);
        };
        document.head.appendChild(scriptRef.current);
      }
    };

    const initializeMap = () => {
      if (!mapRef.current) return;
      const maps = window.kakao.maps;
      
      const options = {
        center: new maps.LatLng(latitude, longitude),
        level: level
      };
      const map = new maps.Map(mapRef.current, options);
      
      // 마커 생성
      const markerPosition = new maps.LatLng(latitude, longitude);
      const marker = new maps.Marker({
        position: markerPosition,
        title: markerTitle
      });
      marker.setMap(map);

      // 인포윈도우 생성
      const infoWindow = new maps.InfoWindow({
        content: `<div style="padding:5px;">${markerTitle}</div>`
      });
      
      // 마커 클릭시 인포윈도우 표시
      maps.event.addListener(marker, 'click', () => {
        infoWindow.open(map, marker);
      });
    };

    loadKakaoMap();

    return () => {
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, [latitude, longitude, level, markerTitle]);

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
}