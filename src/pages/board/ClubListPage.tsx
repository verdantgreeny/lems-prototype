import { Link } from 'react-router-dom';
import { storage, getCurrentUser } from '../../utils/storage';

export default function ClubListPage() {
  const user = getCurrentUser();
  const clubs = storage.get<any[]>('clubs', [
    {
      id: 'club1',
      name: '수영 동아리',
      description: '수영을 좋아하는 분들이 모여 함께 수영을 즐기는 동아리입니다.',
      leader: '홍길동',
      members: 15,
      category: '운동',
      createdAt: '2024-01-15',
    },
    {
      id: 'club2',
      name: '골프 동아리',
      description: '골프를 즐기고 함께 라운드를 즐기는 동아리입니다.',
      leader: '김철수',
      members: 20,
      category: '운동',
      createdAt: '2024-02-01',
    },
    {
      id: 'club3',
      name: '요가 동아리',
      description: '요가를 통해 건강과 마음의 평화를 찾는 동아리입니다.',
      leader: '이영희',
      members: 12,
      category: '건강',
      createdAt: '2024-01-20',
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">동아리</h1>
        {user && (
          <Link
            to="/board/club/create"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            동아리 등록
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <Link
            key={club.id}
            to={`/board/club/${club.id}`}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                {club.category}
              </span>
              <span className="text-sm text-gray-500">{club.members}명</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{club.name}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{club.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>동장: {club.leader}</span>
              <span>{club.createdAt}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

