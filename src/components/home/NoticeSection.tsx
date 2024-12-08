const notices = [
    {
      id: 1,
      title: '2024년 봄학기 신규 강좌 안내',
      date: '2024.03.01',
      category: '공지',
    },
    {
      id: 2,
      title: '3월 레벨테스트 일정 안내',
      date: '2024.02.25',
      category: '일정',
    },
    {
      id: 3,
      title: '신학기 특별 이벤트 안내',
      date: '2024.02.20',
      category: '이벤트',
    },
  ];
  
  export default function NoticeSection() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">공지사항</h2>
            <p className="mt-4 text-lg text-gray-600">
              학원의 최신 소식과 일정을 확인하세요
            </p>
          </div>
  
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200">
              {notices.map((notice) => (
                <div key={notice.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white mb-2">
                        {notice.category}
                      </span>
                      <h3 className="text-lg font-medium text-gray-900">
                        {notice.title}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-500">{notice.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50">
              <button className="w-full text-center text-primary hover:text-primary-dark font-medium">
                더보기
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }