import { Outlet, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyPageLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">마이페이지</h1>
          <div className="flex gap-6">
            <aside className="w-64">
              <nav className="bg-white rounded-lg shadow p-4">
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to="/mypage/info"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`
                      }
                    >
                      내 정보
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/mypage/enrollment"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`
                      }
                    >
                      수강 내역
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/mypage/proof"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`
                      }
                    >
                      증빙 내역
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
