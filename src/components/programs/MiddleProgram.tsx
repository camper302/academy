export default function MiddleProgram() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-2xl font-bold mb-4">중등부 프로그램</h3>
        <p className="text-gray-600 mb-6">
          중학교 교과과정과 연계된 체계적인 영어 학습 프로그램입니다.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-3">Reading & Writing</h4>
            <p className="text-gray-600">독해력 향상과 에세이 작성 훈련</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-3">Grammar & Speaking</h4>
            <p className="text-gray-600">실용적인 문법과 회화 학습</p>
          </div>
        </div>
      </section>
    </div>
  );
}
