import { Link } from 'react-router-dom';
import type { Post } from '../../types';

interface PostListProps {
  posts: Post[];
  basePath: string;
}

export default function PostList({ posts, basePath }: PostListProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="divide-y">
        {posts.length === 0 ? (
          <div className="p-8 text-center text-gray-500">게시글이 없습니다.</div>
        ) : (
          posts.map((post) => (
            <Link key={post.id} to={`${basePath}/${post.id}`} className="block p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {post.isNotice && <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">공지</span>}
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{post.author}</span>
                    <span>{post.createdAt}</span>
                    <span>조회 {post.views}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
