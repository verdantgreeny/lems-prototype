export default function LocationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">찾아오시는길</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">주소</h2>
          <p className="text-lg text-gray-700">28024 충청북도 괴산군 괴산읍 문무로 85 00대학교</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">연락처</h2>
          <ul className="space-y-2 text-gray-700">
            <li>전화: 043-830-8232~3</li>
            <li>팩스: 043-830-8239</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">교통편</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">자가용 이용시</h3>
              <p className="text-gray-700">경부고속도로 → 괴산IC → 괴산읍 방면 → 00대학교</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">대중교통 이용시</h3>
              <p className="text-gray-700">괴산시외버스터미널 하차 → 시내버스 또는 택시 이용</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">주차 안내</h3>
          <p className="text-sm text-gray-700">
            평생교육원 이용 시 주차장을 이용하실 수 있습니다. 주차 요금 할인을 위해 차량번호를 등록해주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
