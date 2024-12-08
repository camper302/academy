import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">동탄 영어 학원</h3>
            <p className="text-gray-400">
              최고의 영어 교육을 제공하는 동탄 지역 대표 영어 학원입니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="text-gray-400">
              <p>주소: 경기도 화성시 동탄</p>
              <p>전화: 031-XXX-XXXX</p>
              <p>이메일: info@example.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2 text-gray-400">
              {['프로그램', '공지사항', '레벨테스트', '오시는 길'].map((item) => (
                <li key={item}>
                  <Link href="/" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 동탄 영어 학원. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}