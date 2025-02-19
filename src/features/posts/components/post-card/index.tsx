import { Card, CardBody, CardHeader } from '@/components/ui/card';
import { Post } from '../../types';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <h3 className="text-lg font-semibold">{post.title}</h3>
      </CardHeader>
      <CardBody>
        <p className="text-gray-600 mb-3">{post.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          <span>By {post.author}</span>
        </div>
      </CardBody>
    </Card>
  );
}
