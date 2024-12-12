export default function HighProgram() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-2xl font-bold mb-4">고등부 프로그램</h3>
        <p className="text-gray-600 mb-6">
          수능과 내신을 대비하는 종합적인 영어 학습 프로그램입니다.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-3">수능 영어</h4>
            <p className="text-gray-600">수능 유형별 문제 풀이와 독해 전략</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-3">내신 대비</h4>
            <p className="text-gray-600">학교별 내신 시험 완벽 대비</p>
          </div>
        </div>
      </section>
    </div>
  );
}
