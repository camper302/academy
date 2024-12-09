import Link from 'next/link'
import { getNotices } from '@/lib/notices'
import { Notice } from '@/types/notice'

export default async function NoticesPage() {
  const notices: Notice[] = await getNotices()

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">공지사항 관리</h2>
        <Link
          href="/admin/notices/create"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          새 공지사항
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left">제목</th>
              <th className="px-6 py-3 text-left">작성일</th>
              <th className="px-6 py-3 text-left">관리</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice: Notice) => (
              <tr key={notice._id} className="border-b">
                <td className="px-6 py-4">{notice.title}</td>
                <td className="px-6 py-4">
                  {new Date(notice.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/admin/notices/${notice._id}/edit`}
                    className="text-blue-500 hover:underline"
                  >
                    수정
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}