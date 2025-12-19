export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">00대학교 평생교육원</h3>
            <p className="text-sm text-gray-300">28024 충청북도 괴산군 괴산읍 문무로 85 00대학교</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">연락처</h3>
            <p className="text-sm text-gray-300">TEL: 043-830-8232~3</p>
            <p className="text-sm text-gray-300">FAX: 043-830-8239</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">이용 안내</h3>
            <p className="text-sm text-gray-300">평일 09:00 ~ 18:00</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          © 2024 00대학교 평생교육원. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
