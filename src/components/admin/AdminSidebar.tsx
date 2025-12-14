import { NavLink } from 'react-router-dom';

export default function AdminSidebar() {
  const menuItems = [
    { path: '/admin', label: '대시보드', icon: '📊' },
    { path: '/admin/courses', label: '강좌 관리', icon: '📚' },
    { path: '/admin/enrollments', label: '수강 신청 관리', icon: '📝' },
    { path: '/admin/members', label: '회원 관리', icon: '👥' },
    { path: '/admin/instructors', label: '강사 관리', icon: '👨‍🏫' },
    { path: '/admin/payments', label: '결제/환불 관리', icon: '💰' },
    { path: '/admin/boards', label: '게시판 관리', icon: '📋' },
  ];

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/admin'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
