import { Link } from 'react-router-dom';
import { storage, getCurrentUser } from '../../utils/storage';

export default function InquiryListPage() {
  const user = getCurrentUser();
  const posts = storage.get<any[]>('posts', []).filter((p) => p.category === '상담실');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">상담실</h1>
        {user && (
          <Link to="/board/inquiry/create" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            문의하기
          </Link>
        )}
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="divide-y">
          {posts.length === 0 ? (
            <div className="p-8 text-center text-gray-500">문의글이 없습니다.</div>
          ) : (
            posts.map((post) => (
              <Link
                key={post.id}
                to={`/board/inquiry/${post.id}`}
                className="block p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span>{post.author}</span>
                      <span>{post.createdAt}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
