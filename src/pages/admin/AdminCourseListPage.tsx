import { Link } from 'react-router-dom';
import { storage } from '../../utils/storage';
import type { Course } from '../../types';

export default function AdminCourseListPage() {
  const courses = storage.get<Course[]>('courses', []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">강좌 관리</h1>
        <Link to="/admin/courses/create" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          강좌 등록
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">강좌명</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">카테고리</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">강사</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">수강료</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">정원</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">상태</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{course.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.instructor}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.fee.toLocaleString()}원</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {course.currentStudents}/{course.maxStudents}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      course.status === 'recruiting' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {course.status === 'recruiting' ? '모집중' : '마감'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/admin/courses/${course.id}/edit`} className="text-blue-600 hover:text-blue-700 mr-3">
                    수정
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
