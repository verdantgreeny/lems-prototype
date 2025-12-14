import { storage, getCurrentUser } from '../../utils/storage';
import type { Enrollment } from '../../types';

export default function MyProofPage() {
  const user = getCurrentUser();
  const enrollments = storage.get<Enrollment[]>('enrollments', []);
  const myEnrollments = user ? enrollments.filter((e) => e.userId === user.id && e.paymentStatus === 'paid') : [];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">증빙 내역</h2>
      <p className="text-gray-600 mb-6">결제 완료된 수강 내역의 증빙 자료를 확인할 수 있습니다.</p>
      {myEnrollments.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>증빙 내역이 없습니다.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {myEnrollments.map((enrollment) => (
            <div key={enrollment.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{enrollment.courseName}</h3>
                <span className="text-sm text-gray-600">{enrollment.month}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">수강료</p>
                  <p className="font-semibold">{enrollment.fee.toLocaleString()}원</p>
                </div>
                {enrollment.discountedFee && (
                  <div>
                    <p className="text-sm text-gray-600">실납입액</p>
                    <p className="font-semibold text-blue-600">{enrollment.discountedFee.toLocaleString()}원</p>
                  </div>
                )}
                {enrollment.paymentDate && (
                  <div>
                    <p className="text-sm text-gray-600">결제일</p>
                    <p className="font-semibold">{enrollment.paymentDate}</p>
                  </div>
                )}
                {enrollment.paymentMethod && (
                  <div>
                    <p className="text-sm text-gray-600">결제방법</p>
                    <p className="font-semibold">
                      {enrollment.paymentMethod === 'account'
                        ? '계좌이체'
                        : enrollment.paymentMethod === 'card'
                        ? '카드결제'
                        : '바우처'}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                  영수증 출력
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm">
                  수강증 출력
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
