import { Outlet, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function InstructorLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">강사 페이지</h1>
          <div className="flex gap-6">
            <aside className="w-64">
              <nav className="bg-white rounded-lg shadow p-4">
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to="/instructor/attendance"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded ${
                          isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                        }`
                      }
                    >
                      출결 관리
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className="flex-1">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

