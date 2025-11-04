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

이 프로젝트는 GitHub Actions를 통해 자동으로 빌드 및 테스트를 수행합니다.

### 필요한 GitHub Secrets 설정

GitHub 저장소의 Settings > Secrets and variables > Actions에서 다음 secrets를 추가하세요:

1. **DATABASE_URL**: 데이터베이스 연결 URL
2. **NEXTAUTH_URL**: 프로덕션 URL (예: https://your-domain.com)
3. **NEXTAUTH_SECRET**: NextAuth 시크릿 키 (랜덤 문자열 생성)
4. **GOOGLE_CLIENT_ID**: Google OAuth 클라이언트 ID
5. **GOOGLE_CLIENT_SECRET**: Google OAuth 클라이언트 시크릿
6. **GITHUB_ID**: GitHub OAuth 앱 ID
7. **GITHUB_SECRET**: GitHub OAuth 앱 시크릿
8. **GITHUB_ACCESS_TOKEN**: GitHub 액세스 토큰
9. **STRIPE_API_KEY**: Stripe API 키
10. **STRIPE_WEBHOOK_SECRET**: Stripe 웹훅 시크릿

### CI/CD 프로세스

- `main` 브랜치에 push하면 자동으로 빌드 및 마이그레이션이 실행됩니다
- Pull Request가 생성되면 CI가 실행되어 빌드 및 린트를 확인합니다

### 배포

배포는 원하는 플랫폼(Vercel, AWS, Railway, Render 등)에서 별도로 설정하세요.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.
