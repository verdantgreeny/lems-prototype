import { storage } from '../../utils/storage';
import PostList from '../../components/board/PostList';
import type { Post } from '../../types';

export default function NoticeListPage() {
  const allPosts = storage.get<Post[]>('posts', []);
  const posts = allPosts.filter((p) => p.category === '공지사항');

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <h1 className="mb-8 text-4xl font-bold">공지사항</h1>
      <PostList posts={posts} basePath="/board/notice" />
    </div>
  );
}
