import { storage } from '../../utils/storage';
import PostList from '../../components/board/PostList';

export default function ArchiveListPage() {
  const posts = storage.get<any[]>('posts', []).filter((p) => p.category === '자료실');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">자료실</h1>
      <PostList posts={posts} basePath="/board/archive" />
    </div>
  );
}
