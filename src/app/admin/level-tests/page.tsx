'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';

interface LevelTest {
  _id: string;
  name: string;
  phone: string;
  grade: string;
  status: string;
  createdAt: string;
}

export default function LevelTestManagement() {
  const [levelTests, setLevelTests] = useState<LevelTest[]>([]);
  const [filteredTests, setFilteredTests] = useState<LevelTest[]>([]);
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLevelTests();
  }, []);

  const fetchLevelTests = async () => {
    try {
      const response = await fetch('/api/level-test');
      if (!response.ok) throw new Error('데이터를 불러오는데 실패했습니다.');
      
      const data = await response.json();
      setLevelTests(data);
      setFilteredTests(data);
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다.');
      setIsLoading(false);
    }
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    if (status === 'ALL') {
      setFilteredTests(levelTests);
    } else {
      setFilteredTests(levelTests.filter(test => test.status === status));
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/level-test/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error('상태 업데이트에 실패했습니다.');

      // 성공 시 목록 새로고침
      await fetchLevelTests();
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다.');
    }
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">레벨 테스트 관리</h1>
      
      <div className="mb-6">
        <select
          value={selectedStatus}
          onChange={(e) => handleStatusChange(e.target.value)}
          className="border rounded-md p-2"
        >
          <option value="ALL">전체</option>
          <option value="PENDING">대기중</option>
          <option value="CONFIRMED">확정</option>
          <option value="COMPLETED">완료</option>
          <option value="CANCELLED">취소</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">신청일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">연락처</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">학년</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTests.map((test) => (
              <tr key={test._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {format(new Date(test.createdAt), 'yyyy-MM-dd HH:mm')}
                </td>
                <td className="px-6 py-4">{test.name}</td>
                <td className="px-6 py-4">{test.phone}</td>
                <td className="px-6 py-4">{test.grade}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    test.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                    test.status === 'CONFIRMED' ? 'bg-blue-100 text-blue-800' :
                    test.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {test.status === 'PENDING' ? '대기중' :
                     test.status === 'CONFIRMED' ? '확정' :
                     test.status === 'COMPLETED' ? '완료' : '취소'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <select
                    onChange={(e) => handleStatusUpdate(test._id, e.target.value)}
                    value={test.status}
                    className="border rounded-md p-1 text-sm"
                  >
                    <option value="PENDING">대기중</option>
                    <option value="CONFIRMED">확정</option>
                    <option value="COMPLETED">완료</option>
                    <option value="CANCELLED">취소</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
