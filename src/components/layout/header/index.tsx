import Link from 'next/link';
import { Container } from '@/features/shared/components';

export function Header() {
  return (
    <header className="py-4 border-b border-gray-200">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            Feature App
          </Link>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/example/features" className="hover:text-blue-600">
                  Features
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
