import { storage } from '../../utils/storage';
import type { User } from '../../types';

export default function AdminMemberListPage() {
  const users = storage.get<User[]>('users', []);
  const members = users.filter((u) => u.role === 'student' || u.role === 'staff');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">회원 관리</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">이름</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">아이디</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">이메일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">전화번호</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">회원 유형</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{member.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{member.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{member.email || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{member.phone || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      member.role === 'staff' || member.isStaff
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {member.role === 'staff' || member.isStaff ? '교직원/재학생' : '일반 수강생'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
