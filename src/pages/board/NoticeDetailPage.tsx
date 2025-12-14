import { useParams, Link } from 'react-router-dom';
import { storage } from '../../utils/storage';
import type { Post } from '../../types';

export default function NoticeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const posts = storage.get<Post[]>('posts', []);
  const post = posts.find((p) => p.id === id && p.category === '공지사항');

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p>게시글을 찾을 수 없습니다.</p>
        <Link to="/board/notice" className="text-blue-600">
          목록으로
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          {post.isNotice && <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded mr-2">공지</span>}
          <h1 className="text-3xl font-bold inline">{post.title}</h1>
        </div>
        <div className="border-b pb-4 mb-6 text-sm text-gray-600">
          <span className="mr-4">작성자: {post.author}</span>
          <span className="mr-4">작성일: {post.createdAt}</span>
          <span>조회수: {post.views}</span>
        </div>
        <div className="prose max-w-none mb-8">
          <p className="whitespace-pre-line">{post.content}</p>
        </div>
        <div className="border-t pt-4">
          <Link to="/board/notice" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            목록으로
          </Link>
        </div>
      </div>
    </div>
  );
}
