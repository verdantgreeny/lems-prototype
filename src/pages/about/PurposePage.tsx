export default function PurposePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">설립목적</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">평생교육원의 설립 목적</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>1. 평생학습 기회 제공</strong>
              <p className="mt-2">
                지역사회 구성원에게 다양한 평생학습 기회를 제공하여 지속적인 자기계발을 지원합니다.
              </p>
            </li>
            <li>
              <strong>2. 지역사회 발전 기여</strong>
              <p className="mt-2">평생교육을 통한 인재 양성으로 지역사회 발전에 기여합니다.</p>
            </li>
            <li>
              <strong>3. 대학-지역사회 연계</strong>
              <p className="mt-2">대학의 교육 자원을 지역사회와 공유하여 상호 발전을 도모합니다.</p>
            </li>
            <li>
              <strong>4. 전문성 향상</strong>
              <p className="mt-2">직업 역량 강화 및 자격증 취득을 통한 전문성 향상을 지원합니다.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
