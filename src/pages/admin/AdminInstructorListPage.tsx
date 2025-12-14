import { Link } from 'react-router-dom';
import { storage } from '../../utils/storage';
import type { Instructor } from '../../types';

export default function AdminInstructorListPage() {
  const instructors = storage.get<Instructor[]>('instructors', []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">강사 관리</h1>
        <Link to="/admin/instructors/create" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          강사 등록
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">이름</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">전화번호</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">이메일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">계약구분</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">계약일</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {instructors.map((instructor) => (
              <tr key={instructor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{instructor.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{instructor.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{instructor.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {instructor.contractType === 'faculty'
                    ? '교원'
                    : instructor.contractType === 'staff'
                    ? '직원'
                    : '외부강사'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{instructor.contractDate || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
