import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage, getCurrentUser } from '../../utils/storage';
import type { Post } from '../../types';

export default function InquiryCreatePage() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const posts = storage.get<Post[]>('posts', []);
    const newPost: Post = {
      id: `post${Date.now()}`,
      title,
      content,
      author: user.name,
      authorId: user.id,
      category: '상담실',
      createdAt: new Date().toISOString().split('T')[0],
      views: 0,
    };
    posts.push(newPost);
    storage.set('posts', posts);
    navigate('/board/inquiry');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">문의하기</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">제목 *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">내용 *</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex gap-4">
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
            등록하기
          </button>
          <button
            type="button"
            onClick={() => navigate('/board/inquiry')}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
