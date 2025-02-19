import { usePosts } from '../../hooks';
import { PostCard } from '../post-card';

export function PostList() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <div className="py-20 text-center">Loading posts...</div>;
  }

  if (error) {
    return <div className="py-20 text-center text-red-600">Error: {error}</div>;
  }

  if (posts.length === 0) {
    return <div className="py-20 text-center">No posts found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
