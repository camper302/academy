import Link from 'next/link'

export default function Dashboard() {
  const menuItems = [
    { title: '공지사항 관리', href: '/admin/notices', icon: '📢' },
    { title: '강의 시간표 관리', href: '/admin/timetable', icon: '📅' },
    { title: '레벨 테스트 예약 관리', href: '/admin/level-test', icon: '📝' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">관리자 대시보드</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
