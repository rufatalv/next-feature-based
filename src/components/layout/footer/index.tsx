import { Container } from "@/features/shared/components";

export function Footer() {
  return (
    <footer className="py-6 border-t border-gray-200 mt-12">
      <Container>
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Rufat Aliyev</p>
        </div>
      </Container>
    </footer>
  );
}
