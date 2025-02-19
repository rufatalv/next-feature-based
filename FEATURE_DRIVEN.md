# Feature-Driven Architecture

This project follows a feature-driven architecture to organize code based on business domains rather than technical layers. This approach helps maintain a clean separation of concerns and makes the codebase more scalable and maintainable.

## Structure Overview

```
src/
├── app/             # Next.js App Router pages and layouts
├── components/      # Shared UI components
├── features/        # Feature modules
├── lib/             # Utility functions and services
└── types/           # Global TypeScript types
```

## Features Structure

Each feature follows a consistent structure:

```
features/
└── feature-name/
    ├── components/  # UI components specific to this feature
    ├── hooks/       # React hooks for this feature
    ├── services/    # API services and business logic
    ├── types/       # TypeScript types for this feature
    └── index.ts     # Public API of the feature
```

## Key Principles

1. **Encapsulation**: Each feature encapsulates its implementation details.
2. **Dependency Direction**: Features should depend on shared utilities, not on other features.
3. **Clear API**: Each feature exposes a clear API through its index.ts file.
4. **Reusable Components**: UI components that are used across features belong in the shared components directory.

## Best Practices

### Importing

- Import from feature public APIs (index.ts), not internal modules:
  ```typescript
  // Good
  import { UserProfile } from '@/features/users';
  
  // Avoid
  import { UserProfile } from '@/features/users/components/user-profile';
  ```

### Feature Independence

- Features should be as independent as possible
- If multiple features need the same functionality, consider:
  1. Moving it to a shared utility
  2. Creating a new lower-level feature that others can depend on

### Testing

- Unit tests should be co-located with the code they test
- Each feature should have its own test coverage

## When to Create a New Feature

Create a new feature when you have:
1. A distinct business domain or user workflow
2. A set of related components, logic, and data
3. Functionality that could potentially be reused or extracted
