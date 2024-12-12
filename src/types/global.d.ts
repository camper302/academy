/**
 * 전역 타입 정의 파일
 * 위치: kiwoom-academy/my-app/src/types/global.d.ts
 * 
 * @description
 * - mongoose 및 카카오맵 관련 전역 타입 정의
 * - Window 인터페이스 확장하여 카카오맵 타입 추가
 */

/// <reference path="./kakao.d.ts" />

declare global {
  // mongoose 전역 변수 타입 정의
  var mongoose: {
    conn: any | null;
    promise: Promise<any> | null;
  }

  // 카카오맵 타입 정의
  interface Window {
    kakao: {
      maps: typeof kakao.maps;
    };
  }
}

// 빈 export로 모듈로 인식되게 함
export {};
