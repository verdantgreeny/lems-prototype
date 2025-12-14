import { storage } from '../../utils/storage';
import PostList from '../../components/board/PostList';
import type { Post } from '../../types';

export default function NewsListPage() {
  const allPosts = storage.get<Post[]>('posts', []);
  const posts = allPosts.filter((p) => p.category === '교육원 소식');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">교육원 소식</h1>
      <PostList posts={posts} basePath="/board/news" />
    </div>
  );
}
