# OASIS Companion Landing

OASIS Companion Landing is built using Next.js, Tailwind CSS, Shadcn-ui, Magic-ui, Supabase, NextAuth, and Prisma. It is powered by Vercel and the OpenAI API.

## Environment Variables

### Supabase Connection Pooling

```
DATABASE_URL=
```

### NextAuth Configuration

```
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
```

### Google OAuth Configuration

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### GitHub OAuth Configuration

```
GITHUB_ID=
GITHUB_SECRET=
GITHUB_ACCESS_TOKEN=
```

### Stripe Configuration

```
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Setup Instructions

1. **Clone the repository:**

   ```sh
   git clone https://github.com/jieunchoi-hw/oasis-companion-landing.git
   cd oasis-companion-landing
   ```

2. **Create and populate the `.env` file:**

   ```sh
   cp .env.example .env
   ```

   Edit the `.env` file and add your credentials.

3. **Install dependencies:**

   ```sh
   pnpm install
   ```

4. **Run the development server:**

   ```sh
   pnpm run dev
   ```

5. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](License.md) file for details.

## GitHub Actions CI/CD 설정

이 프로젝트는 GitHub Actions를 통해 자동으로 빌드 및 GitHub Pages에 배포됩니다.

### GitHub Pages 설정

1. GitHub 저장소의 **Settings > Pages**로 이동합니다
2. **Source**를 **GitHub Actions**로 설정합니다
3. 저장하면 자동으로 GitHub Pages 환경이 생성됩니다

### CI/CD 프로세스

- `main` 브랜치에 push하면 자동으로 빌드 후 GitHub Pages에 배포됩니다
- Pull Request가 생성되면 CI가 실행되어 빌드 및 린트를 확인합니다
- 배포된 사이트는 `https://jieunchoi-hw.github.io/oasis-companion-landing/`에서 확인할 수 있습니다

### 참고사항

- Next.js가 정적 사이트로 빌드되므로, 서버 사이드 기능(API Routes, Server Components 등)은 사용할 수 없습니다
- 환경 변수는 빌드 시점에만 사용되며, 런타임 환경 변수는 사용할 수 없습니다

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.
