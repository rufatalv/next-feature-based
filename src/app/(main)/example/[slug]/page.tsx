import { Container } from '@/features/shared/components';

export default function ExamplePage({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-bold mb-4">Example Page: {params.slug}</h1>
        <p className="text-gray-600">
          This is an example page demonstrating dynamic routes.
        </p>
      </div>
    </Container>
  );
}
