import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../../utils/storage';

export default function FacilityRentalPage() {
  const user = getCurrentUser();
  const facilities = [
    {
      id: 'facility1',
      name: '실내 수영장',
      description: '수영 및 수중운동 강좌용 실내 수영장',
      capacity: '30명',
      fee: '시간당 50,000원',
      available: true,
    },
    {
      id: 'facility2',
      name: '스포츠센터',
      description: '요가, 댄스, 운동 강좌용 다목적 체육시설',
      capacity: '50명',
      fee: '시간당 30,000원',
      available: true,
    },
    {
      id: 'facility3',
      name: '실외골프실습장',
      description: '골프 강좌용 실외 골프 연습장',
      capacity: '20명',
      fee: '시간당 40,000원',
      available: true,
    },
    {
      id: 'facility4',
      name: '강의실 A',
      description: '이론 강좌 및 자격증 과정용 강의실',
      capacity: '30명',
      fee: '시간당 20,000원',
      available: true,
    },
    {
      id: 'facility5',
      name: '강의실 B',
      description: '소규모 강좌용 강의실',
      capacity: '15명',
      fee: '시간당 15,000원',
      available: true,
    },
  ];

  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);
  const [rentalForm, setRentalForm] = useState({
    date: '',
    startTime: '',
    endTime: '',
    purpose: '',
    contact: user?.phone || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('로그인이 필요합니다.');
      return;
    }
    alert('대여 신청이 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.');
    setRentalForm({
      date: '',
      startTime: '',
      endTime: '',
      purpose: '',
      contact: user?.phone || '',
    });
    setSelectedFacility(null);
  };

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <h1 className="mb-8 text-4xl font-bold">공간 및 시설 대여</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* 시설 목록 */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">대여 가능 시설</h2>
          <div className="space-y-4">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className={`bg-white rounded-lg shadow p-6 cursor-pointer transition-all ${
                  selectedFacility === facility.id ? 'ring-2 ring-blue-500 border-blue-500' : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedFacility(facility.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{facility.name}</h3>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      facility.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {facility.available ? '대여 가능' : '대여 불가'}
                  </span>
                </div>
                <p className="mb-2 text-sm text-gray-600">{facility.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>수용인원: {facility.capacity}</span>
                  <span>대여료: {facility.fee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 대여 신청 폼 */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">대여 신청</h2>
          {!user ? (
            <div className="p-6 border border-yellow-200 rounded-lg bg-yellow-50">
              <p className="mb-4 text-yellow-800">대여 신청을 하려면 로그인이 필요합니다.</p>
              <Link to="/login" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                로그인하기
              </Link>
            </div>
          ) : selectedFacility ? (
            <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">선택한 시설</label>
                <p className="text-lg font-semibold">{facilities.find((f) => f.id === selectedFacility)?.name}</p>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  대여 날짜 <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={rentalForm.date}
                  onChange={(e) => setRentalForm({ ...rentalForm, date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    시작 시간 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    value={rentalForm.startTime}
                    onChange={(e) => setRentalForm({ ...rentalForm, startTime: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    종료 시간 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    value={rentalForm.endTime}
                    onChange={(e) => setRentalForm({ ...rentalForm, endTime: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  사용 목적 <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={rentalForm.purpose}
                  onChange={(e) => setRentalForm({ ...rentalForm, purpose: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={rentalForm.contact}
                  onChange={(e) => setRentalForm({ ...rentalForm, contact: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                신청하기
              </button>
            </form>
          ) : (
            <div className="p-6 text-center text-gray-500 rounded-lg bg-gray-50">
              <p>대여할 시설을 선택해주세요.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
