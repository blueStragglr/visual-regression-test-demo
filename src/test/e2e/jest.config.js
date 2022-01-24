// ~src/test/e2e/jest.config.js

module.exports = {
  // 디렉토리 설정
  rootDir: '../../',
  roots: ['./test/e2e'],
  // 타임스크립트 컴파일
  transform: { '^.+\\.ts?$': 'ts-jest' },
  // 테스트 코드 특정
  testMatch: ['**/?(*.)+(spec|test).ts'],
  // 테스트코드를 찾지 않을 경로
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  // 테스트 타임아웃
  testTimeout: 100000,
  // 개별 테스트 결과 표시
  verbose: true,
  // 프리셋(puppeteer 사용)
  preset: 'jest-puppeteer',
  // 테스트 셋업 후 실행할 스크립트
  setupFilesAfterEnv: ['./test/e2e/jest.image.ts']
}
