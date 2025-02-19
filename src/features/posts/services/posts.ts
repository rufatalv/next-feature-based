import { Post } from '../types';

// Simulate API call with mock data
export async function getPosts(): Promise<Post[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: '1',
      title: 'Getting Started with Feature-Based Architecture',
      excerpt: 'Learn how to structure your Next.js applications for scalability and maintainability.',
      content: 'Full content would go here...',
      author: 'Jane Developer',
      createdAt: '2023-10-15T12:00:00Z',
    },
    {
      id: '2',
      title: 'Building Reusable React Components',
      excerpt: 'Best practices for creating components that can be shared across features.',
      content: 'Full content would go here...',
      author: 'Alex Engineer',
      createdAt: '2023-10-12T10:30:00Z',
    },
    {
      id: '3',
      title: 'State Management in Feature-Based Apps',
      excerpt: 'Exploring different approaches to managing state in a modular application.',
      content: 'Full content would go here...',
      author: 'Sam Architect',
      createdAt: '2023-10-08T14:15:00Z',
    },
  ];
}

export async function getPostById(id: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find(post => post.id === id) || null;
}
