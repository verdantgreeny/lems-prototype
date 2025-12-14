import { Link } from 'react-router-dom';
import { storage, getCurrentUser } from '../../utils/storage';
import type { Enrollment } from '../../types';

export default function MyEnrollmentPage() {
  const user = getCurrentUser();
  const enrollments = storage.get<Enrollment[]>('enrollments', []);
  const myEnrollments = user ? enrollments.filter((e) => e.userId === user.id) : [];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">수강 내역</h2>
      {myEnrollments.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="mb-4">수강 내역이 없습니다.</p>
          <Link to="/courses" className="text-blue-600 hover:text-blue-700 font-semibold">
            강좌 보러가기 →
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">강좌명</th>
                <th className="text-left py-3 px-4">수강월</th>
                <th className="text-left py-3 px-4">수강료</th>
                <th className="text-left py-3 px-4">할인금액</th>
                <th className="text-left py-3 px-4">결제상태</th>
                <th className="text-left py-3 px-4">신청일</th>
              </tr>
            </thead>
            <tbody>
              {myEnrollments.map((enrollment) => (
                <tr key={enrollment.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <Link to={`/courses/${enrollment.courseId}`} className="text-blue-600 hover:text-blue-700">
                      {enrollment.courseName}
                    </Link>
                  </td>
                  <td className="py-3 px-4">{enrollment.month}</td>
                  <td className="py-3 px-4">{enrollment.fee.toLocaleString()}원</td>
                  <td className="py-3 px-4">
                    {enrollment.discountedFee && enrollment.discountedFee < enrollment.fee
                      ? `${(enrollment.fee - enrollment.discountedFee).toLocaleString()}원`
                      : '-'}
                  </td>
                  <td className="py-3 px-4">
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
                  <td className="py-3 px-4">{enrollment.enrollmentDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
