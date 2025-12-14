export default function HistoryPage() {
  const history = [
    { year: '2024', event: '평생교육원 운영 체계 고도화' },
    { year: '2023', event: '온라인 교육과정 확대 운영' },
    { year: '2022', event: '지역혁신중심대학체계 RISE 프로그램 참여' },
    { year: '2021', event: '평생교육원 신규 강좌 다수 개설' },
    { year: '2020', event: '평생교육원 설립' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">연혁</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          {history.map((item, index) => (
            <div key={index} className="flex items-start gap-6 pb-6 border-b last:border-0">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold min-w-[100px] text-center">
                {item.year}
              </div>
              <div className="flex-1 pt-2">
                <p className="text-gray-700">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
