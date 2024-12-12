import { ABOUT_IMAGES } from '@/constants/images';
import Image from 'next/image';

export default function AboutFacilities() {
  const facilities = [
    {
      title: '학원 전경',
      image: ABOUT_IMAGES.academy,
      description: '최신식 시설을 갖춘 학습 공간'
    },
    {
      title: '학습실',
      image: ABOUT_IMAGES.studyRoom,
      description: '집중력 향상을 위한 독립 학습 공간'
    },
    {
      title: '그룹 스터디룸',
      image: ABOUT_IMAGES.groupRoom,
      description: '토론과 협업을 위한 그룹 학습 공간'
    },
    {
      title: '휴게 공간',
      image: ABOUT_IMAGES.lounge,
      description: '학습 중 휴식을 취할 수 있는 편안한 공간'
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">시설 안내</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facilities.map((facility) => (
          <div key={facility.title} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              {/* <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover"
              /> */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}