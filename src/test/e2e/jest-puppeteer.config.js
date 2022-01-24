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
  }
}
