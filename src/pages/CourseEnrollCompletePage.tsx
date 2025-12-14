import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { storage } from '../utils/storage';
import type { Course } from '../types';

export default function CourseEnrollCompletePage() {
  const { id } = useParams<{ id: string }>();
  const courses = storage.get<Course[]>('courses', []);
  const course = courses.find((c) => c.id === id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-12 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">수강 신청이 완료되었습니다</h1>
          <p className="text-gray-600">{course?.name} 강좌 신청이 접수되었습니다.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
          <h2 className="font-semibold mb-4">다음 단계</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>1. 선택하신 결제 방법으로 수강료를 납부해주세요.</li>
            <li>2. 계좌이체 시 신청자 이름으로 입금해주세요.</li>
            <li>3. 카드결제는 평생교육원 사무실을 방문해주세요.</li>
            <li>4. 결제 확인 후 수강이 확정됩니다.</li>
          </ul>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            to="/mypage/enrollment"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            내 수강 내역 보기
          </Link>
          <Link
            to="/courses"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300"
          >
            강좌 목록으로
          </Link>
        </div>
      </div>
    </div>
  );
}
