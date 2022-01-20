# 2022년 1월 우아한 테크세미나 데모자료

이 프로젝트는 react-create-app template --typescript 로 생성된 앱에 jest와 puppeteer를 이용해 시각적 회귀 테스트를
작성 해 둔 데모 프로젝트입니다.

클론 후 아래 명령어들을 실행해서 시각적 회귀 테스트를 수행할 수 있습니다.

> 본 테스트 과정 수행에는 4321번 포트가 사용됩니다.


### 테스트
```shell
$ yarn test-update
```
위 스크립트를 실행하면 src/test/e2e/tests/__ image_snapshots __ 폴더 안에 저장된 기존 스크린샷과 현재 렌더링된 페이지를 비교합니다.


### 스냅샷 업데이트
```shell
$ yarn test-update
```
위 스크립트를 실행하면 src/test/e2e/tests/__ image_snapshots __ 폴더 안의 스크린샷을 무시하고 새 스크린샷을 저장합니다.

