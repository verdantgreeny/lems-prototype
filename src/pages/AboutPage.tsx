export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">교육원 소개</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">설립 목적</h2>
        <p className="text-gray-700 leading-relaxed">
          00대학교 평생교육원은 지역사회 구성원의 평생학습을 지원하고, 다양한 교육 프로그램을 제공하여 지역사회 발전에
          기여하고 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">주요 프로그램</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>시민 교양 강좌</li>
          <li>자격증 과정</li>
          <li>직무 역량 강화 과정</li>
          <li>건강증진 프로그램</li>
          <li>취미 및 여가 프로그램</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">연락처</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="mb-2">
            <strong>주소:</strong> 28024 충청북도 괴산군 괴산읍 문무로 85 00대학교
          </p>
          <p className="mb-2">
            <strong>전화:</strong> 043-830-8232~3
          </p>
          <p>
            <strong>팩스:</strong> 043-830-8239
          </p>
        </div>
      </section>
    </div>
  );
}
