module.exports = {
  rootDir: '../../',
  roots: ['./test/e2e'],
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testMatch: ['**/?(*.)+(spec|test).ts'],
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  testTimeout: 100000,
  verbose: true,
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['./test/e2e/jest.image.ts']
}
