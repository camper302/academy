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

  useEffect(() => {
    const mapElement = mapRef.current;
    if (typeof window.kakao === 'undefined' || !mapElement) return;

    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level
      };
      
      const map = new window.kakao.maps.Map(mapElement, options);
      const marker = new window.kakao.maps.Marker({
        position: options.center
      });
      marker.setMap(map);

      const infowindow = new window.kakao.maps.InfoWindow({
        content: `<div style="padding:5px;">${markerTitle}</div>`
      });
      infowindow.open(map, marker);
    });
  }, [latitude, longitude, level, markerTitle]);

  return (
    <div 
      ref={mapRef}
      className={`rounded-lg overflow-hidden bg-gray-100 relative ${className}`}
      style={{ width, height }}
    />
  );
}
