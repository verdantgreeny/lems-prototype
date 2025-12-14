import { getCurrentUser } from '../../utils/storage';

export default function MyInfoPage() {
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">내 정보</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
          <p className="text-lg">{user.name}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">아이디</label>
          <p className="text-lg">{user.username}</p>
        </div>
        {user.email && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
            <p className="text-lg">{user.email}</p>
          </div>
        )}
        {user.phone && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
            <p className="text-lg">{user.phone}</p>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">회원 유형</label>
          <p className="text-lg">
            {user.role === 'student' && '일반 수강생'}
            {user.role === 'staff' && '교직원/재학생'}
            {user.role === 'instructor' && '강사'}
            {user.role === 'admin' && '관리자'}
          </p>
        </div>
        {user.isStaff && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">교직원/재학생 할인 혜택을 받을 수 있습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
