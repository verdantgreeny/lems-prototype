export default function ParkingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">주차 안내</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">주차장 이용 안내</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li>• 평생교육원 이용 시 주차장을 이용하실 수 있습니다.</li>
              <li>• 주차 공간이 제한적이오니 가급적 대중교통을 이용해주시기 바랍니다.</li>
              <li>• 주차 요금 할인을 위해 차량번호를 등록해주세요.</li>
              <li>• 주차장 운영 시간: 평일 09:00 ~ 22:00</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">주차 요금</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">구분</th>
                  <th className="text-left py-2">요금</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">기본 요금 (2시간)</td>
                  <td className="py-2">무료</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">추가 요금 (10분당)</td>
                  <td className="py-2">500원</td>
                </tr>
                <tr>
                  <td className="py-2">수강생 할인</td>
                  <td className="py-2">50% 할인</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">문의</h2>
          <p className="text-gray-700">주차 관련 문의사항은 평생교육원 사무실(043-830-8232~3)로 연락주시기 바랍니다.</p>
        </section>
      </div>
    </div>
  );
}
