// ~src/test/e2e/imageComparison.ts

import { MatchImageSnapshotOptions } from 'jest-image-snapshot'

export const getSnapshotConfig: (
  imageName?: string
) => MatchImageSnapshotOptions = (imageName) => {
  return {
    diffDirection: 'horizontal',
    dumpDiffToConsole: false,
    comparisonMethod: 'pixelmatch',
    customSnapshotIdentifier: imageName,
    customDiffDir: 'src/test/e2e/tests/__image_snapshots__/__diff_output__/'
  }
}
