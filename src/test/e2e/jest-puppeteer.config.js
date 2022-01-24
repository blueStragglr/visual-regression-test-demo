// ~src/test/e2e/jest-puppeteer.config.js

module.exports = {
  server: {
    // Jest 실행 시 서버 서빙을 위해 실행할 커맨드
    command: `npm run testdev`,
    // 서버 포트 번호 (package.json의 "testdev" 스크립트에 설정됨.)
    port: 4321,
    // 로컬호스트이므로 https가 아닌 http 사용
    protocol: 'http',
    // 서버 실행 타임아웃
    launchTimeout: 120000,
    debug: true
  },
  launch: {
    // headless 모드
    headless: true,
    // 브라우저 실행 타임아웃
    timeout: 120000,
    // 크로미움이 없으면 에러가 발생할 수 있음.
    executablePath: process.env.CHROMIUM_PATH,
    // 보안 기능인 샌드박스 비활성화 & 공유 메모리 사용 비활성화
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  }
}
