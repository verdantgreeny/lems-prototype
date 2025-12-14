export default function OrganizationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">조직도</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="bg-blue-600 text-white px-6 py-4 rounded-lg inline-block mb-4">
              <h2 className="text-xl font-bold">평생교육원장</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">행정팀</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 수강 신청 관리</li>
                <li>• 회원 관리</li>
                <li>• 결제 관리</li>
                <li>• 강좌 운영 지원</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">교육팀</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 강좌 기획 및 개발</li>
                <li>• 강사 관리</li>
                <li>• 교육과정 운영</li>
                <li>• 교육 품질 관리</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
