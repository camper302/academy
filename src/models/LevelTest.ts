import mongoose from 'mongoose';

const levelTestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  grade: { type: String, required: true },
  status: { type: String, default: 'PENDING' },
  createdAt: { type: Date, default: Date.now },
});

interface LevelTestData {
  name: string;
  phone: string;
  grade: string;
  status: string;
  createdAt: Date;
}

// 입력 값 정합성 체크 함수
const validateLevelTest = (data: LevelTestData) => {
  const { name, phone, grade } = data;
  if (!name || typeof name !== 'string') {
    throw new Error('이름은 필수이며 문자열이어야 합니다.');
  }
  if (!phone || typeof phone !== 'string') {
    throw new Error('전화번호는 필수이며 문자열이어야 합니다.');
  }
  if (!grade || typeof grade !== 'string') {
    throw new Error('학년은 필수이며 문자열이어야 합니다.');
  }
};

// 레벨 테스트 신청 기능
const createLevelTest = async (data: LevelTestData) => {
  validateLevelTest(data);
  const levelTest = new (mongoose.models.LevelTest || mongoose.model('LevelTest', levelTestSchema))(data);
  await levelTest.save();
  return levelTest;
};

export { createLevelTest, validateLevelTest };
export default mongoose.models.LevelTest || mongoose.model('LevelTest', levelTestSchema);
