import { useParams, Link } from 'react-router-dom';
import { storage } from '../../utils/storage';

export default function ClubDetailPage() {
  const { id } = useParams<{ id: string }>();
  const clubs = storage.get<any[]>('clubs', []);
  const club = clubs.find((c) => c.id === id);

  if (!club) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p>동아리를 찾을 수 없습니다.</p>
        <Link to="/board/club" className="text-blue-600">목록으로</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded mb-2 inline-block">
              {club.category}
            </span>
            <h1 className="text-3xl font-bold">{club.name}</h1>
          </div>
          <span className="text-sm text-gray-500">{club.members}명</span>
        </div>
        <div className="border-b pb-4 mb-6">
          <p className="text-gray-600">동장: {club.leader}</p>
          <p className="text-gray-600">설립일: {club.createdAt}</p>
        </div>
        <div className="prose max-w-none mb-8">
          <h2 className="text-xl font-bold mb-4">동아리 소개</h2>
          <p className="text-gray-700 whitespace-pre-line">{club.description}</p>
        </div>
        <div className="border-t pt-4">
          <Link
            to="/board/club"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            목록으로
          </Link>
        </div>
      </div>
    </div>
  );
}

