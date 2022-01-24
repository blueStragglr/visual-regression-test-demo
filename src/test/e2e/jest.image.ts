// ~src/test/e2e/jest.image.ts

import { toMatchImageSnapshot } from 'jest-image-snapshot'

expect.extend({ toMatchImageSnapshot })
