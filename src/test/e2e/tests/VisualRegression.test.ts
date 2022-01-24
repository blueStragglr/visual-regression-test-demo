// ~src/test/e2e/tests.VisualRegression.test.ts

import { getSnapshotConfig } from '../imageComparison'
import initializeTest from '../initialize'

it(`Visual Regression Test`, async () => {
  // 퍼페티어 페이지 초기화 & 콜백함수 가져오기
  const { page, cleanUp } = await initializeTest()

  // 스크린샷을 찍어서
  const image = await page.screenshot({ fullPage: true })

  // Snapshot config 에 정의된 대로 비교
  const snapshotConfig = getSnapshotConfig()
  expect(image).toMatchImageSnapshot(snapshotConfig)

  await cleanUp()
})
