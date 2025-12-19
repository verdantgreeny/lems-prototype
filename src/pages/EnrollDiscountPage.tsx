export default function EnrollDiscountPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">수강료 감면 기준</h1>

      {/* 수영 및 수중운동 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">수영 및 수중운동</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">대상</th>
                <th className="px-6 py-4 text-center">정상가</th>
                <th className="px-6 py-4 text-center">00대 자체 지원</th>
                <th className="px-6 py-4 text-center">괴산군 지원</th>
                <th className="px-6 py-4 text-center">본인 부담액 (최종할인율)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">본교 재학생/교직원 본인</td>
                <td className="px-6 py-4 text-center">140,000원</td>
                <td className="px-6 py-4 text-center">70,000원</td>
                <td className="px-6 py-4 text-center">0원</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">70,000원 (50%)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">본교 재학생/교직원 가족</td>
                <td className="px-6 py-4 text-center">140,000원</td>
                <td className="px-6 py-4 text-center">40,000원</td>
                <td className="px-6 py-4 text-center">0원</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">100,000원 (28.6%)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">본교 졸업생 본인(학부/대학원)</td>
                <td className="px-6 py-4 text-center">140,000원</td>
                <td className="px-6 py-4 text-center">40,000원</td>
                <td className="px-6 py-4 text-center">0원</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">100,000원 (28.6%)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">괴산, 음성, 진천 군민</td>
                <td className="px-6 py-4 text-center">140,000원</td>
                <td className="px-6 py-4 text-center">40,000원</td>
                <td className="px-6 py-4 text-center">0원</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">100,000원 (28.6%)</td>
              </tr>
              <tr className="hover:bg-gray-50 bg-yellow-50">
                <td className="px-6 py-4">괴산군민 취약계층(별도 요건)</td>
                <td className="px-6 py-4 text-center">140,000원</td>
                <td className="px-6 py-4 text-center">40,000원</td>
                <td className="px-6 py-4 text-center">40,000원</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">60,000원 (57.1%)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">괴산사이버군민</td>
                <td className="px-6 py-4 text-center">140,000원</td>
                <td className="px-6 py-4 text-center">20,000원</td>
                <td className="px-6 py-4 text-center">0원</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">120,000원 (14.3%)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">학생군사학교 직원 본인</td>
                <td className="px-6 py-4 text-center">140,000원</td>
                <td className="px-6 py-4 text-center">20,000원</td>
                <td className="px-6 py-4 text-center">0원</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">120,000원 (14.3%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 기타 교육과정 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">기타 교육과정</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">항목</th>
                <th className="px-6 py-4 text-left">대상</th>
                <th className="px-6 py-4 text-center">1개월 수강료 할인율</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">50% 할인</td>
                <td className="px-6 py-4">본교 재학생/교직원 본인</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">50%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">50% 할인</td>
                <td className="px-6 py-4">본교 재학생/교직원 가족</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">50%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">20% 할인</td>
                <td className="px-6 py-4">본교 졸업생 본인(학부/대학원)</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">20%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">20% 할인</td>
                <td className="px-6 py-4">학생군사학교 직원 본인</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">20%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">20% 할인</td>
                <td className="px-6 py-4">최고경영자과정 수료생/수강생</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">20%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">20% 할인</td>
                <td className="px-6 py-4">2개 과정 이상 수강 등록한자</td>
                <td className="px-6 py-4 text-center font-bold text-blue-600">20%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">안내사항</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>1. 수영 및 수중운동 과정을 제외한 다른 교육과정에 해당</li>
            <li>2. 할인을 적용 시 신분증 및 관련 증빙서류를 반드시 제출해야 함</li>
            <li>3. 여러 과정 수강 시 할인 금액이 높은 1개 과목만 할인한다.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
