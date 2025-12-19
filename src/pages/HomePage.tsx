import { Link } from 'react-router-dom';
import { storage } from '../utils/storage';
import type { Course } from '../types';

export default function HomePage() {
  const courses = storage.get<Course[]>('courses', []);
  const featuredCourses = courses.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">00대학교 평생교육원</h1>
          <p className="text-xl mb-8">평생학습을 통한 인재 양성과 지역사회 발전에 기여합니다</p>
          <div className="flex gap-4 justify-center">
            <Link to="/courses" className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
              강좌 안내
            </Link>
            <Link
              to="/board/notice"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400"
            >
              공지사항
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{courses.length}</div>
              <div className="text-gray-600">개설 강좌</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {courses.reduce((sum, c) => sum + c.currentStudents, 0)}
              </div>
              <div className="text-gray-600">수강생 수</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">강좌 카테고리</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">인기 강좌</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-semibold">{course.category}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      course.status === 'recruiting' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {course.status === 'recruiting' ? '모집중' : '마감'}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p className="text-gray-600 text-sm mb-3">강사: {course.instructor}</p>
                <p className="text-gray-600 text-sm mb-3">
                  {course.schedule.days.join(', ')} {course.schedule.time}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{course.fee.toLocaleString()}원</span>
                  <span className="text-sm text-gray-500">
                    {course.currentStudents}/{course.maxStudents}명
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/courses" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              전체 강좌 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">공지사항</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">공지</span>
                  <Link to="/board/notice" className="font-semibold hover:text-blue-600">
                    2024년 12월 수강 신청 안내
                  </Link>
                </div>
                <p className="text-sm text-gray-600">2024-11-15</p>
              </div>
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">공지</span>
                  <Link to="/board/notice" className="font-semibold hover:text-blue-600">
                    수영 및 골프 강좌 수강료 변동 안내
                  </Link>
                </div>
                <p className="text-sm text-gray-600">2024-11-10</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link to="/board/notice" className="text-blue-600 hover:text-blue-700 font-semibold">
                더보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
