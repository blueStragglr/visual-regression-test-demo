import { getSnapshotConfig } from '../imageComparison'
import initializeTest from '../initialize'

it(`Visual Regression Test`, async () => {
  const { page, cleanUp } = await initializeTest()

  await page.waitForNetworkIdle({ idleTime: 3000, timeout: 6000 })
  const image = await page.screenshot({ fullPage: true })
  const snapshotConfig = getSnapshotConfig()
  expect(image).toMatchImageSnapshot(snapshotConfig)

  await cleanUp()
})

