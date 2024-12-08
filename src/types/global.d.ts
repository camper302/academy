declare global {
  // mongoose 전역 변수 타입 정의
  var mongoose: {
    conn: any | null;
    promise: Promise<any> | null;
  }

  // 카카오맵 타입 정의
  interface Window {
    kakao: {
      maps: {
        load(callback: () => void): void;
        Map: any;
        LatLng: any;
        Marker: any;
        InfoWindow: any;
        services: {
          Geocoder: any;
          Places: any;
        };
      };
    };
  }
}

// 빈 export로 모듈로 인식되게 함
export {};
