import { useParams, Link, Navigate } from 'react-router-dom';
import { storage } from '../utils/storage';
import { getCurrentUser } from '../utils/storage';
import type { Course } from '../types';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const courses = storage.get<Course[]>('courses', []);
  const course = courses.find((c) => c.id === id);
  const user = getCurrentUser();

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const canEnroll = course.status === 'recruiting' && course.currentStudents < course.maxStudents;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-blue-600 font-semibold">{course.category}</span>
          <span
            className={`px-3 py-1 rounded text-sm ${
              course.status === 'recruiting' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}
          >
            {course.status === 'recruiting' ? '모집중' : '마감'}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-6">{course.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">강사</h3>
            <p className="text-lg">{course.instructor}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">수강료</h3>
            <p className="text-2xl font-bold text-blue-600">{course.fee.toLocaleString()}원</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">강의 일정</h3>
            <p className="text-lg">
              {course.schedule.days.join(', ')} {course.schedule.time}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">강의 장소</h3>
            <p className="text-lg">{course.location}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">정원</h3>
            <p className="text-lg">
              {course.currentStudents}명 / {course.maxStudents}명
            </p>
          </div>
        </div>

        {course.description && (
          <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-2">강좌 소개</h3>
            <p className="text-gray-600 whitespace-pre-line">{course.description}</p>
          </div>
        )}

        <div className="flex gap-4">
          {canEnroll ? (
            user ? (
              <Link
                to={`/courses/${course.id}/enroll`}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                수강 신청하기
              </Link>
            ) : (
              <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                로그인 후 신청하기
              </Link>
            )
          ) : (
            <button
              disabled
              className="px-6 py-3 bg-gray-300 text-gray-500 rounded-lg font-semibold cursor-not-allowed"
            >
              신청 불가
            </button>
          )}
          <Link
            to="/courses"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300"
          >
            목록으로
          </Link>
        </div>
      </div>
    </div>
  );
}
