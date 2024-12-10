'use server';

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI must be defined');
}

interface Cached {
  conn: any | null;
  promise: Promise<any> | null;
}

declare global {
  var mongoose: Cached;
}

const cached: Cached = global.mongoose || {
  conn: null,
  promise: null
};

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectDB() {
  try {
    // 이미 연결되어 있다면 기존 연결 반환
    if (cached.conn) {
      return cached.conn;
    }

    // 새로운 연결 생성
    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      };

      cached.promise = mongoose.connect(MONGODB_URI, opts);
    }

    // 연결 대기 및 캐시 업데이트
    try {
      cached.conn = await cached.promise;
    } catch (e) {
      cached.promise = null;
      throw e;
    }

    return cached.conn;
  } catch (error) {
    console.error('MongoDB 연결 에러:', error);
    throw error; // 원본 에러를 그대로 전달하여 디버깅을 용이하게 함
  }
}

export default connectDB;