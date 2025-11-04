# OASIS Companion Landing

OASIS Companion Landing is a static landing page built using Next.js, Tailwind CSS, Shadcn-ui, and Magic-ui. It is designed for static hosting on GitHub Pages.

## Setup Instructions

1. **Clone the repository:**

   ```sh
   git clone https://github.com/jieunchoi-hw/oasis-companion-landing.git
   cd oasis-companion-landing
   ```

2. **Install dependencies:**

   ```sh
   pnpm install
   ```

3. **Run the development server:**

   ```sh
   pnpm run dev
   ```

4. **Build for production:**

   ```sh
   pnpm run build
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
- 이 프로젝트는 순수한 정적 랜딩 페이지로, 인증 및 데이터베이스 기능을 포함하지 않습니다

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.
