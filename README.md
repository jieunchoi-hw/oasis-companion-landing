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

## GitHub Actions 배포 설정

이 프로젝트는 GitHub Actions를 통해 자동으로 Vercel에 배포됩니다.

### 필요한 GitHub Secrets 설정

GitHub 저장소의 Settings > Secrets and variables > Actions에서 다음 secrets를 추가하세요:

1. **VERCEL_TOKEN**: Vercel 대시보드의 Settings > Tokens에서 생성
2. **VERCEL_ORG_ID**: Vercel 대시보드의 Settings > General에서 확인
3. **VERCEL_PROJECT_ID**: Vercel 프로젝트 설정에서 확인 (프로젝트를 먼저 생성해야 함)
4. **DATABASE_URL**: 데이터베이스 연결 URL
5. **NEXTAUTH_URL**: 프로덕션 URL (예: https://your-domain.vercel.app)
6. **NEXTAUTH_SECRET**: NextAuth 시크릿 키 (랜덤 문자열 생성)
7. **GOOGLE_CLIENT_ID**: Google OAuth 클라이언트 ID
8. **GOOGLE_CLIENT_SECRET**: Google OAuth 클라이언트 시크릿
9. **GITHUB_ID**: GitHub OAuth 앱 ID
10. **GITHUB_SECRET**: GitHub OAuth 앱 시크릿
11. **GITHUB_ACCESS_TOKEN**: GitHub 액세스 토큰
12. **STRIPE_API_KEY**: Stripe API 키
13. **STRIPE_WEBHOOK_SECRET**: Stripe 웹훅 시크릿

### 배포 프로세스

- `main` 브랜치에 push하면 자동으로 프로덕션 배포가 시작됩니다
- Pull Request가 생성되면 CI가 실행되어 빌드 및 린트를 확인합니다

### Vercel 프로젝트 설정

1. Vercel 대시보드에서 새 프로젝트를 생성하거나 기존 프로젝트를 연결합니다
2. 프로젝트 설정에서 GitHub Actions를 통한 배포를 활성화합니다 (선택사항)
3. 필요한 환경 변수를 Vercel 대시보드에도 설정합니다

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.
