/**
 * @file Schedule Type Definition
 * @description 시간표 관련 타입 정의
 */

export interface Schedule {
  grade: '초등' | '중등' | '고등';
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  className: string;
  teacher: string;
}
