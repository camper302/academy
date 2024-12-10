export default function MainHero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          체계적인 교육 프로그램
        </h1>
        <p className="text-lg text-white mb-8">
          초등, 중등, 고등 맞춤형 교육 커리큘럼
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          프로그램 보기
        </button>
      </div>
    </div>
  );
}
