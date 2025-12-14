import { storage } from '../../utils/storage';
import type { Enrollment, User } from '../../types';

export default function AdminEnrollmentPage() {
  const enrollments = storage.get<Enrollment[]>('enrollments', []);
  const users = storage.get<User[]>('users', []);

  const getUserName = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    return user?.name || '알 수 없음';
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">수강 신청 관리</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">신청자</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">강좌명</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">수강월</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">수강료</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">할인금액</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">결제상태</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">신청일</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{getUserName(enrollment.userId)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enrollment.courseName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enrollment.month}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enrollment.fee.toLocaleString()}원</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {enrollment.discountedFee && enrollment.discountedFee < enrollment.fee
                    ? `${(enrollment.fee - enrollment.discountedFee).toLocaleString()}원`
                    : '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      enrollment.paymentStatus === 'paid'
                        ? 'bg-green-100 text-green-800'
                        : enrollment.paymentStatus === 'refunded'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {enrollment.paymentStatus === 'paid'
                      ? '결제완료'
                      : enrollment.paymentStatus === 'refunded'
                      ? '환불완료'
                      : '미결제'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{enrollment.enrollmentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
