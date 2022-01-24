// ~src/test/e2e/imageComparison.ts

import { MatchImageSnapshotOptions } from 'jest-image-snapshot'

export const getSnapshotConfig: (
  imageName?: string
) => MatchImageSnapshotOptions = (imageName) => {
  return {
    // 비교 이미지를 배열할 방향
    diffDirection: 'horizontal',
    // 콘솔에 발생한 차이를 표시할지 여부: Base64 데이터라 의미 없음
    dumpDiffToConsole: false,
    // 비교 방법 'pixelmatch' | 'ssim'
    comparisonMethod: 'pixelmatch',
    // 스냅샷 이름 정의
    customSnapshotIdentifier: imageName,
    // 비교 이미지 출력 경로
    customDiffDir: 'src/test/e2e/tests/__image_snapshots__/__diff_output__/'
  }
}
