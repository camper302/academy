'use client'
import Script from 'next/script'

export default function KakaoMapScript() {
  return (
    <Script
      strategy="afterInteractive"
      type="text/javascript"
      src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
    />
  )
}
