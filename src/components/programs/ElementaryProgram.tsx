export default function ElementaryProgram() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-2xl font-bold mb-4">초등부 프로그램</h3>
        <p className="text-gray-600 mb-6">
          초등학생의 눈높이에 맞춘 재미있고 효과적인 영어 학습 프로그램입니다.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-3">Phonics & Reading</h4>
            <p className="text-gray-600">파닉스부터 시작하는 체계적인 읽기 학습</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-3">Basic Grammar</h4>
            <p className="text-gray-600">기초 문법과 문장 구조 이해하기</p>
          </div>
        </div>
      </section>
    </div>
  );
}
