/**
 * 학원 소개 섹션 컴포넌트
 * 위치: kiwoom-academy/my-app/src/components/about/AboutIntro.tsx
 */
export default function AboutIntro() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">최고의 영어교육을 지향합니다</h2>
          <p className="text-gray-600 mb-4">
            기우음 영어학원은 1:1 맞춤형 교육과 체계적인 커리큘럼으로
            학생들의 영어 실력 향상을 위해 최선을 다하고 있습니다.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>1:1 맞춤형 교육 시스템</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>체계적인 학습 커리큘럼</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>우수한 강사진</span>
            </li>
          </ul>
        </div>
        <div className="relative h-96">
          <img
            src="/images/about/academy.jpg"
            alt="기우음 영어학원 전경"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
