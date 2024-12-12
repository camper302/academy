/**
 * 홈페이지 메인 페이지
 * 위치: kiwoom-academy/my-app/src/app/page.tsx
 */
import MainHero from '@/components/home/MainHero';
import IntroSection from '@/components/home/IntroSection';
import ProgramSection from '@/components/home/ProgramSection';
import NoticeSection from '@/components/home/NoticeSection';
import { Notice } from '@/types/notice';

// 공지사항 데이터 가져오기
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

export default async function Home() {
  const notices: Notice[] = await getNotices();

  return (
    <main>
      <MainHero />
      <IntroSection />
      <ProgramSection />
      <NoticeSection notices={notices} />
    </main>
  );
}