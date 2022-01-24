// ~src/test/e2d/initialize.ts

import puppeteer from 'puppeteer'
const HOST_BASE_URL = 'http://localhost:4321/'

const initializeTest = async () => {
  // 크로미움 브라우저 실행
  const browser = await puppeteer.launch()
  // 크로미움 페이지 열기
  const page = await browser.newPage()
  // 페이지 뷰포트 사이즈 고정
  await page.setViewport({
    width: 1200,
    height: 800,
    deviceScaleFactor: 1
  })

  // 테스트용 페이지 로드
  const response: any = await page.goto(HOST_BASE_URL)
  // 페이지 정상로드 확인
  expect(response.status()).toBe(200)
  // 페이지 로드 완료 확인
  await page.waitForSelector('#root')

  return {
    page,
    // 종료시 크로미움 프로세스 종료를 위한 콜백을 함께 반환
    async cleanUp() {
      await page.close()
      await browser.close()
    }
  }
}

export default initializeTest
