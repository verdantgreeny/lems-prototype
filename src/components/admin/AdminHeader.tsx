import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, setCurrentUser } from '../../utils/storage';

export default function AdminHeader() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md border-b">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-blue-600">LEMS 관리자</h1>
          <Link
            to="/"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            평생교육원 홈
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">{user?.name}님</span>
          <button onClick={handleLogout} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            로그아웃
          </button>
        </div>
      </div>
    </header>
  );
}
