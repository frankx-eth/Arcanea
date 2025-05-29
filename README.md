# 🌀 Arcanea - Myth-Tech Ecosystem

> **A revolutionary platform blending AI, storytelling, and personal development through interactive mythic experiences.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🌟 Vision

Arcanea is a myth-tech ecosystem that combines AI, storytelling, and personal development. It consists of:

- **Web Portal**: Interactive platform to explore the Arcanean Thread Matrix
- **Mobile App**: Native experience for engaging with Thread Guardians
- **API Layer**: Powered by Claude AI through OpenRouter
- **Core Library**: Shared TypeScript/JavaScript modules

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+ or pnpm 8+
- Git
- [OpenRouter API Key](https://openrouter.ai/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/arcanea.git
   cd arcanea
   ```

2. Install dependencies:
   ```bash
   # Using pnpm (recommended)
   pnpm install
   
   # Or using npm
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

4. Start the development servers:
   ```bash
   # Start web portal
   cd apps/web-portal
   pnpm dev
   
   # In a new terminal, start mobile app (requires Expo Go)
   cd apps/mobile-app
   pnpm start
   ```

## 🏗 Project Structure

```
arcanea/
├── apps/
│   ├── web-portal/          # Next.js web application
│   └── mobile-app/          # Expo/React Native application
├── packages/
│   ├── openrouter-wrapper/  # TypeScript client for OpenRouter API
│   ├── ui/                  # Shared UI components
│   └── types/               # Shared TypeScript types
├── public/                  # Static assets
├── .github/                 # GitHub workflows and templates
├── .husky/                  # Git hooks
└── .vscode/                 # VS Code settings
```

## 🧩 Key Features

### Web Portal
- Interactive Thread Matrix visualization
- Responsive design with dark/light mode
- Real-time chat with AI Thread Guardians
- User authentication and profiles

### Mobile App
- Native mobile experience
- Push notifications
- Offline support
- Biometric authentication

### Core Features
- Type-safe API client
- Shared UI component library
- Theming system
- Internationalization (i18n) support

## 🛠 Development

### Available Scripts

```bash
# Install dependencies
pnpm install

# Run web portal in development mode
pnpm --filter web-portal dev

# Run mobile app in development mode
pnpm --filter mobile-app start

# Build all packages and apps
pnpm build

# Run tests
pnpm test

# Run linting
pnpm lint

# Run type checking
pnpm type-check
```

### Code Style

This project uses:
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for code quality
- [TypeScript](https://www.typescriptlang.org/) for type safety

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Claude AI](https://www.anthropic.com/) for the powerful language model
- [OpenRouter](https://openrouter.ai/) for model access
- [Next.js](https://nextjs.org/) and [Expo](https://expo.dev/) for the amazing frameworks
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

<div align="center">
  Made with ❤️ by the Arcanea Team
</div>"
Building the Arcanea Multiverse to elevate humanities consciousness 
