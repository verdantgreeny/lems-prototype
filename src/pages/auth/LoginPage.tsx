import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { storage, setCurrentUser } from '../../utils/storage';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const users = storage.get<any[]>('users', []);
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      setCurrentUser(user);
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">로그인</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">아이디</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            로그인
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/register" className="text-blue-600 hover:text-blue-700">
            회원가입
          </Link>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-semibold mb-2">테스트 계정:</p>
          <p className="text-xs text-gray-600">관리자: admin / admin123</p>
          <p className="text-xs text-gray-600">일반: student1 / student123</p>
          <p className="text-xs text-gray-600">교직원: staff1 / staff123</p>
          <p className="text-xs text-gray-600">강사: instructor1 / instructor123</p>
        </div>
      </div>
    </div>
  );
}
