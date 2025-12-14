import { useState } from 'react';
import { Link } from 'react-router-dom';
import { storage } from '../utils/storage';
import type { Course } from '../types';

export default function CourseListPage() {
  const courses = storage.get<Course[]>('courses', []);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const categories = ['전체', ...Array.from(new Set(courses.map((c) => c.category)))];
  const filteredCourses =
    selectedCategory === '전체' ? courses : courses.filter((c) => c.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">강좌 안내</h1>

      {/* Category Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
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
            <p className="text-gray-600 text-sm mb-2">강사: {course.instructor}</p>
            <p className="text-gray-600 text-sm mb-2">
              {course.schedule.days.join(', ')} {course.schedule.time}
            </p>
            <p className="text-gray-600 text-sm mb-3">장소: {course.location}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-blue-600">{course.fee.toLocaleString()}원</span>
              <span className="text-sm text-gray-500">
                {course.currentStudents}/{course.maxStudents}명
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
