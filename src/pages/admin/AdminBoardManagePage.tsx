import { storage } from '../../utils/storage';
import type { Post } from '../../types';

export default function AdminBoardManagePage() {
  const posts = storage.get<Post[]>('posts', []);

  const categories = [
    '공지사항',
    '교육원 소식',
    '언론 보도자료',
    '민간자격정보',
    '상담실',
    '학습자 게시판',
    '수강 후기',
    '학습자료',
    '자료실',
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">게시판 관리</h1>
      <div className="space-y-6">
        {categories.map((category) => {
          const categoryPosts = posts.filter((p) => p.category === category);
          return (
            <div key={category} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{category}</h2>
                <span className="text-gray-600">총 {categoryPosts.length}개</span>
              </div>
              <div className="space-y-2">
                {categoryPosts.slice(0, 5).map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      {post.isNotice && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded mr-2">공지</span>
                      )}
                      <span className="font-semibold">{post.title}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {post.createdAt} | 조회 {post.views}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
