const fs = require('fs');
const path = require('path');

// 임시 디렉토리
const tempDir = path.join(process.cwd(), '.temp-build');

// API Routes 복원
const apiDirs = [
  { temp: path.join(tempDir, 'app-api'), original: path.join(process.cwd(), 'app', 'api') },
  { temp: path.join(tempDir, 'pages-api'), original: path.join(process.cwd(), 'pages', 'api') },
];

// 서버 사이드 페이지 복원
const serverSidePaths = [
  { temp: path.join(tempDir, 'dashboard'), original: path.join(process.cwd(), 'app', '(dashboard)') },
  { temp: path.join(tempDir, 'auth'), original: path.join(process.cwd(), 'app', '(auth)') },
];

// API Routes 복원
apiDirs.forEach(({ temp, original }) => {
  if (fs.existsSync(temp)) {
    const originalParent = path.dirname(original);
    if (!fs.existsSync(originalParent)) {
      fs.mkdirSync(originalParent, { recursive: true });
    }
    if (fs.existsSync(original)) {
      fs.rmSync(original, { recursive: true, force: true });
    }
    fs.renameSync(temp, original);
    console.log(`Restored ${original} from ${temp}`);
  }
});

// 서버 사이드 페이지 복원
serverSidePaths.forEach(({ temp, original }) => {
  if (fs.existsSync(temp)) {
    const originalParent = path.dirname(original);
    if (!fs.existsSync(originalParent)) {
      fs.mkdirSync(originalParent, { recursive: true });
    }
    if (fs.existsSync(original)) {
      fs.rmSync(original, { recursive: true, force: true });
    }
    fs.renameSync(temp, original);
    console.log(`Restored ${original} from ${temp}`);
  }
});

// 마케팅 레이아웃 복원
const marketingLayout = path.join(process.cwd(), 'app', '(marketing)', 'layout.tsx');
const tempLayout = path.join(tempDir, 'marketing-layout.tsx');
if (fs.existsSync(tempLayout)) {
  fs.copyFileSync(tempLayout, marketingLayout);
  console.log(`Restored ${marketingLayout} from ${tempLayout}`);
}

// 임시 디렉토리 정리
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log('Cleaned up temporary directory');
}

console.log('All files restored after build');


