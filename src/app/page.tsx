import IntroSection from '@/components/home/IntroSection'
import ProgramSection from '@/components/home/ProgramSection'
import NoticeSection from '@/components/home/NoticeSection'

export default function Home() {
  return (
    <div className="space-y-20">
      <IntroSection />
      <ProgramSection />
      <NoticeSection />
    </div>
  )
}
