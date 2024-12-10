import NoticeSection from '@/components/home/NoticeSection';
import MainHero from '@/components/home/MainHero';
import IntroSection from '@/components/home/IntroSection';
import ProgramSection from '@/components/home/ProgramSection';
import MapSection from '@/components/home/MapSection';
import { Notice } from '@/types/notice';
import LevelTestSection from '@/components/home/LevelTestSection';

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
    <main className="relative">
      <IntroSection />
      <ProgramSection />
      <NoticeSection notices={notices} limit={3} />
      <LevelTestSection />
      <MapSection />
    </main>
  );
}