import { Container } from '@/features/shared/components';

export default function Home() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js Feature-Based Starter
        </h1>
        <p className="text-center text-gray-600 max-w-lg mx-auto">
          This starter template uses a feature-based architecture to help organize 
          your Next.js application by domain features rather than technical layers.
        </p>
      </div>
    </Container>
  );
}
