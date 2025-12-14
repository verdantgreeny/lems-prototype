import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../utils/storage';
import type { Course } from '../../types';

export default function AdminCourseCreatePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    instructor: '',
    instructorId: '',
    days: [] as string[],
    time: '',
    location: '',
    fee: '',
    maxStudents: '',
    status: 'recruiting' as 'recruiting' | 'closed',
    month: new Date().toISOString().slice(0, 7),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const courses = storage.get<Course[]>('courses', []);
    const newCourse: Course = {
      id: `course${Date.now()}`,
      name: formData.name,
      category: formData.category,
      instructor: formData.instructor,
      instructorId: formData.instructorId || undefined,
      schedule: {
        days: formData.days,
        time: formData.time,
      },
      location: formData.location,
      fee: parseInt(formData.fee),
      maxStudents: parseInt(formData.maxStudents),
      currentStudents: 0,
      status: formData.status,
      month: formData.month,
    };
    courses.push(newCourse);
    storage.set('courses', courses);
    navigate('/admin/courses');
  };

  const dayOptions = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">강좌 등록</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">강좌명 *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">카테고리 *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="">선택하세요</option>
              <option value="골프">골프</option>
              <option value="수영 및 수중운동">수영 및 수중운동</option>
              <option value="건강증진">건강증진</option>
              <option value="직업교양">직업교양</option>
              <option value="자격과정">자격과정</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">강사명 *</label>
            <input
              type="text"
              value={formData.instructor}
              onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">요일 *</label>
            <div className="flex flex-wrap gap-2">
              {dayOptions.map((day) => (
                <label key={day} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.days.includes(day)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          days: [...formData.days, day],
                        });
                      } else {
                        setFormData({
                          ...formData,
                          days: formData.days.filter((d) => d !== day),
                        });
                      }
                    }}
                    className="mr-2"
                  />
                  <span>{day}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">시간 *</label>
            <input
              type="text"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              placeholder="예: 18:00~20:00"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">장소 *</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">수강료 *</label>
            <input
              type="number"
              value={formData.fee}
              onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">정원 *</label>
            <input
              type="number"
              value={formData.maxStudents}
              onChange={(e) => setFormData({ ...formData, maxStudents: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">상태 *</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'recruiting' | 'closed' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="recruiting">모집중</option>
              <option value="closed">마감</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">수강월 *</label>
            <input
              type="month"
              value={formData.month}
              onChange={(e) => setFormData({ ...formData, month: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              등록하기
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/courses')}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300"
            >
              취소
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
