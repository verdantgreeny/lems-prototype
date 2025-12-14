import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { storage } from '../../utils/storage';
import type { Course } from '../../types';

export default function AdminCourseEditPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const courses = storage.get<Course[]>('courses', []);
  const course = courses.find((c) => c.id === id);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    instructor: '',
    days: [] as string[],
    time: '',
    location: '',
    fee: '',
    maxStudents: '',
    status: 'recruiting' as 'recruiting' | 'closed' | 'ongoing',
  });

  useEffect(() => {
    if (course) {
      setFormData({
        name: course.name,
        category: course.category,
        instructor: course.instructor,
        days: course.schedule.days,
        time: course.schedule.time,
        location: course.location,
        fee: course.fee.toString(),
        maxStudents: course.maxStudents.toString(),
        status: course.status,
      });
    }
  }, [course]);

  if (!course) {
    return <div>강좌를 찾을 수 없습니다.</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedCourses = courses.map((c) =>
      c.id === id
        ? {
            ...c,
            name: formData.name,
            category: formData.category,
            instructor: formData.instructor,
            schedule: {
              days: formData.days,
              time: formData.time,
            },
            location: formData.location,
            fee: parseInt(formData.fee),
            maxStudents: parseInt(formData.maxStudents),
            status: formData.status,
          }
        : c
    );
    storage.set('courses', updatedCourses);
    navigate('/admin/courses');
  };

  const dayOptions = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">강좌 수정</h1>
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-lg">
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">강좌명 *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">카테고리 *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="골프">골프</option>
              <option value="수영 및 수중운동">수영 및 수중운동</option>
              <option value="건강증진">건강증진</option>
              <option value="직업교양">직업교양</option>
              <option value="자격과정">자격과정</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">강사명 *</label>
            <input
              type="text"
              value={formData.instructor}
              onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">요일 *</label>
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
            <label className="block mb-2 text-sm font-medium text-gray-700">시간 *</label>
            <input
              type="text"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">장소 *</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">수강료 *</label>
            <input
              type="number"
              value={formData.fee}
              onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">정원 *</label>
            <input
              type="number"
              value={formData.maxStudents}
              onChange={(e) => setFormData({ ...formData, maxStudents: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">상태 *</label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value as 'recruiting' | 'closed' | 'ongoing' })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="recruiting">모집중</option>
              <option value="closed">마감</option>
              <option value="ongoing">진행중</option>
            </select>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              수정하기
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/courses')}
              className="px-6 py-3 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              취소
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
