export default function GreetingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">인사말</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">중원대학교 평생교육원에 오신 것을 환영합니다.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            중원대학교 평생교육원은 지역사회 구성원의 평생학습을 지원하고, 다양한 교육 프로그램을 제공하여 지역사회
            발전에 기여하고 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            우리 교육원은 시민 교양 강좌, 자격증 과정, 직무 역량 강화 과정 등 다양한 프로그램을 운영하여 지역 주민들의
            지식과 역량을 향상시키고 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">앞으로도 지역사회와 함께 성장하는 평생교육원이 되겠습니다.</p>
        </div>
      </div>
    </div>
  );
}
