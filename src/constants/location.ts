/**
 * 위치 정보 상수
 * 
 * @description
 * - 학원 위치 정보 관련 상수 정의
 * - 주소, 연락처, 좌표 등을 중앙 관리
 */

export const ACADEMY_LOCATION = {
  name: '기우음 영어학원',
  address: '경기도 화성시 동탄순환대로 127-17',
  phone: '031-1234-5678',
  coordinates: {
    latitude: 37.1654778,
    longitude: 127.1136298,
  },
  transportation: {
    subway: '동탄역 2번 출구에서 도보 5분',
    bus: '동탄순환버스 27번, 동탄센트럴파크 정류장 하차'
  },
  map: {
    level: 3,
    markerTitle: '기우음 영어학원',
    infoWindowContent: '기우음 영어학원'
  }
} as const;

// 카카오맵 설정
export const KAKAO_MAP_CONFIG = {
  scriptUrl: '//dapi.kakao.com/v2/maps/sdk.js',
  defaultCenter: {
    latitude: 37.1654778,
    longitude: 127.1136298,
  },
  defaultLevel: 3,
} as const;
