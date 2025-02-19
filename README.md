# Next.js Feature-Based Starter

A Next.js starter template organized around features rather than technical layers, promoting better separation of concerns and maintainability for medium to large applications.

## Features

- 📁 Feature-based folder structure
- 🔄 App Router for routing
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 🔒 NextAuth.js for authentication
- 🧩 Reusable UI components
- 🔧 Utility functions and services

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

This project follows a feature-driven architecture. Learn more in the [FEATURE_DRIVEN.md](./FEATURE_DRIVEN.md) documentation.

```
src/
├── app/             # Next.js App Router pages
├── components/      # Shared UI components
├── features/        # Feature modules
│   ├── auth/        # Authentication feature
│   ├── posts/       # Posts feature
│   └── shared/      # Shared feature components
├── lib/             # Utility functions
└── types/           # Global TypeScript types
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Feature-Driven Development](https://en.wikipedia.org/wiki/Feature-driven_development)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## License

MIT
