/**
 * @file Schedule Model
 * @description 시간표 데이터를 위한 Mongoose 모델
 */

import mongoose from 'mongoose';
import type { Schedule } from '@/types/schedule';  // type-only import로 변경

// Schedule 인터페이스와 Document를 확장하는 인터페이스 정의
interface ISchedule extends Schedule, mongoose.Document {}

const scheduleSchema = new mongoose.Schema({
  grade: { 
    type: String, 
    required: true,
    enum: ['초등', '중등', '고등']
  },
  dayOfWeek: { 
    type: String, 
    required: true 
  },
  startTime: { 
    type: String, 
    required: true 
  },
  endTime: { 
    type: String, 
    required: true 
  },
  className: { 
    type: String, 
    required: true 
  },
  teacher: { 
    type: String, 
    required: true 
  }
}, { 
  timestamps: true 
});

const Schedule = mongoose.models.Schedule || mongoose.model<ISchedule>('Schedule', scheduleSchema);

export default Schedule;