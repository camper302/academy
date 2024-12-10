import { Notice } from '@/types/notice';

async function getNotices() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/notices`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch notices');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching notices:', error);
    return [];
  }
}

export default async function NoticesPage() {
  const notices: Notice[] = await getNotices();
  const sortedNotices = [...notices].sort((a, b) => a.priority - b.priority);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">전체 공지사항</h1>
        <div className="space-y-4">
          {sortedNotices.map((notice) => (
            <div 
              key={notice._id}
              className="block p-4 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">
                    {notice.title}
                    {notice.isEmergency && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        긴급
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(notice.createdAt).toLocaleDateString()}
                  </p>
                  <p className="mt-2 text-gray-600">{notice.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
