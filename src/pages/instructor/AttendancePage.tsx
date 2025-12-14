import { useState } from 'react';
import { storage, getCurrentUser } from '../../utils/storage';
import type { Course, Enrollment } from '../../types';

export default function AttendancePage() {
  const user = getCurrentUser();
  const courses = storage.get<Course[]>('courses', []);
  const enrollments = storage.get<Enrollment[]>('enrollments', []);

  // 강사가 담당하는 강좌만 필터링
  const instructorCourses =
    user?.role === 'instructor' ? courses.filter((c) => c.instructorId === user.id || c.instructor === user.name) : [];

  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [attendance, setAttendance] = useState<Record<string, 'present' | 'absent' | 'late'>>({});

  // const currentCourse = courses.find((c) => c.id === selectedCourse);
  const courseEnrollments = selectedCourse
    ? enrollments.filter((e) => e.courseId === selectedCourse && e.status === 'confirmed')
    : [];

  const handleAttendanceChange = (userId: string, status: 'present' | 'absent' | 'late') => {
    setAttendance({ ...attendance, [userId]: status });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse || !selectedDate) {
      alert('강좌와 날짜를 선택해주세요.');
      return;
    }

    // 출결 데이터 저장 (localStorage)
    const attendanceData = storage.get<any[]>('attendance', []);
    const newAttendance = {
      id: `attendance${Date.now()}`,
      courseId: selectedCourse,
      date: selectedDate,
      attendance: attendance,
      instructorId: user?.id,
      createdAt: new Date().toISOString(),
    };
    attendanceData.push(newAttendance);
    storage.set('attendance', attendanceData);

    alert('출결이 등록되었습니다.');
    setAttendance({});
  };

  if (user?.role !== 'instructor') {
    return (
      <div className="max-w-4xl px-4 py-12 mx-auto">
        <div className="p-8 text-center bg-white rounded-lg shadow-lg">
          <p className="mb-4 text-gray-600">강사만 접근 가능한 페이지입니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <h1 className="mb-8 text-4xl font-bold">출결 관리</h1>

      <div className="p-8 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                강좌 선택 <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => {
                  setSelectedCourse(e.target.value);
                  setAttendance({});
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">선택하세요</option>
                {instructorCourses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name} ({course.schedule.days.join(', ')} {course.schedule.time})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                날짜 <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          {selectedCourse && courseEnrollments.length > 0 && (
            <div>
              <h3 className="mb-4 text-lg font-bold">수강생 출결</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-sm font-medium text-left text-gray-700">이름</th>
                      <th className="px-4 py-3 text-sm font-medium text-center text-gray-700">출석</th>
                      <th className="px-4 py-3 text-sm font-medium text-center text-gray-700">지각</th>
                      <th className="px-4 py-3 text-sm font-medium text-center text-gray-700">결석</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {courseEnrollments.map((enrollment) => {
                      const enrollmentUser = storage.get<any[]>('users', []).find((u) => u.id === enrollment.userId);
                      const currentStatus = attendance[enrollment.userId] || null;

                      return (
                        <tr key={enrollment.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3">{enrollmentUser?.name || '알 수 없음'}</td>
                          <td className="px-4 py-3 text-center">
                            <input
                              type="radio"
                              name={`attendance-${enrollment.userId}`}
                              checked={currentStatus === 'present'}
                              onChange={() => handleAttendanceChange(enrollment.userId, 'present')}
                              className="cursor-pointer"
                            />
                          </td>
                          <td className="px-4 py-3 text-center">
                            <input
                              type="radio"
                              name={`attendance-${enrollment.userId}`}
                              checked={currentStatus === 'late'}
                              onChange={() => handleAttendanceChange(enrollment.userId, 'late')}
                              className="cursor-pointer"
                            />
                          </td>
                          <td className="px-4 py-3 text-center">
                            <input
                              type="radio"
                              name={`attendance-${enrollment.userId}`}
                              checked={currentStatus === 'absent'}
                              onChange={() => handleAttendanceChange(enrollment.userId, 'absent')}
                              className="cursor-pointer"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedCourse && courseEnrollments.length === 0 && (
            <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
              <p className="text-yellow-800">이 강좌에 등록된 수강생이 없습니다.</p>
            </div>
          )}

          {selectedCourse && (
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                출결 등록
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedCourse('');
                  setAttendance({});
                }}
                className="px-6 py-3 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                초기화
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
