export default function FacilitiesPage() {
  const facilities = [
    {
      name: '실내 수영장',
      description: '남녀 샤워실을 갖춘 실내 수영장으로 수영 및 수중운동 강좌가 진행됩니다.',
    },
    {
      name: '스포츠센터',
      description: '요가, 댄스, 운동 강좌가 진행되는 다목적 체육시설입니다.',
    },
    {
      name: '실외골프실습장',
      description: '골프 강좌가 진행되는 실외 골프 연습장입니다.',
    },
    {
      name: '강의실',
      description: '이론 강좌 및 자격증 과정이 진행되는 강의실입니다.',
    },
    {
      name: '평생교육원 사무실',
      description: '수강 신청 및 상담이 가능한 사무실입니다. (00대학교(구)스포츠센터 내)',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">시설안내</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilities.map((facility, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-600">{facility.name}</h3>
            <p className="text-gray-700">{facility.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
        <h3 className="font-semibold mb-2">정기휴장 안내</h3>
        <p className="text-sm text-gray-700">매주 월요일: 실내수영장, 샤워장, 스포츠센터, 실외골프실습장 휴장</p>
      </div>
    </div>
  );
}
