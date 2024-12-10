'use client'

import { useState } from 'react';

export default function LevelTestSection() {
  // 폼 데이터 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: ''
  });
  
  // 에러 메시지 상태 관리
  const [error, setError] = useState<string | null>(null);
  
  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    setError(null);
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 클라이언트 측 유효성 검사
      if (!formData.name || !formData.phone || !formData.grade) {
        setError('모든 필드를 입력해주세요.');
        return;
      }

      const response = await fetch('/api/level-tests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || '신청 중 오류가 발생했습니다.');
      }

      // 성공 시 폼 초기화
      setFormData({ name: '', phone: '', grade: '' });
      alert('레벨 테스트 신청이 완료되었습니다.');
      
    } catch (err) {
      console.error('에러:', err);
      setError(err instanceof Error ? err.message : '신청 중 오류가 발생했습니다.');
    }
  };

  return (
    <section id="level-test" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">무료 레벨 테스트</h2>
          <p className="mt-4 text-lg text-gray-600">
            정확한 실력 진단으로 최적의 학습 방향을 제시해드립니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                레벨 테스트 진행 과정
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm mr-3">1</span>
                  <div>
                    <p className="font-medium">신청서 작성</p>
                    <p className="text-gray-600">기본 정보와 희망 시간대를 입력해주세요</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm mr-3">2</span>
                  <div>
                    <p className="font-medium">일정 확정</p>
                    <p className="text-gray-600">담당 선생님과 테스트 일정을 조율합니다</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm mr-3">3</span>
                  <div>
                    <p className="font-medium">레벨 테스트</p>
                    <p className="text-gray-600">Speaking, Reading, Writing 능력을 평가합니다</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm mr-3">4</span>
                  <div>
                    <p className="font-medium">결과 상담</p>
                    <p className="text-gray-600">테스트 결과를 바탕으로 맞춤 학습 방향을 제시합니다</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              레벨 테스트 신청
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">이름</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">연락처</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700">학년</label>
                <select
                  id="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                >
                  <option value="">선택해주세요</option>
                  <option>초등학교 1-2학년</option>
                  <option>초등학교 3-4학년</option>
                  <option>초등학교 5-6학년</option>
                  <option>중학생</option>
                  <option>고등학생</option>
                </select>
              </div>
              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                레벨 테스트 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}