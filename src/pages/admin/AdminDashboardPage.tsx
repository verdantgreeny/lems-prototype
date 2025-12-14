import { storage } from '../../utils/storage';
import type { Course, Enrollment, User } from '../../types';

export default function AdminDashboardPage() {
  const courses = storage.get<Course[]>('courses', []);
  const enrollments = storage.get<Enrollment[]>('enrollments', []);
  const users = storage.get<User[]>('users', []);

  const totalCourses = courses.length;
  const totalEnrollments = enrollments.length;
  const totalUsers = users.filter((u) => u.role === 'student' || u.role === 'staff').length;
  const pendingPayments = enrollments.filter((e) => e.paymentStatus === 'unpaid').length;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-600 mb-2">개설 강좌</h3>
          <p className="text-3xl font-bold text-blue-600">{totalCourses}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-600 mb-2">총 수강 신청</h3>
          <p className="text-3xl font-bold text-green-600">{totalEnrollments}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-600 mb-2">등록 회원</h3>
          <p className="text-3xl font-bold text-purple-600">{totalUsers}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-600 mb-2">미결제 건수</h3>
          <p className="text-3xl font-bold text-red-600">{pendingPayments}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">최근 수강 신청</h2>
          <div className="space-y-3">
            {enrollments
              .slice(-5)
              .reverse()
              .map((enrollment) => (
                <div key={enrollment.id} className="border-b pb-3">
                  <p className="font-semibold">{enrollment.courseName}</p>
                  <p className="text-sm text-gray-600">{enrollment.enrollmentDate}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">인기 강좌</h2>
          <div className="space-y-3">
            {courses
              .sort((a, b) => b.currentStudents - a.currentStudents)
              .slice(0, 5)
              .map((course) => (
                <div key={course.id} className="border-b pb-3">
                  <p className="font-semibold">{course.name}</p>
                  <p className="text-sm text-gray-600">
                    {course.currentStudents}/{course.maxStudents}명
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
