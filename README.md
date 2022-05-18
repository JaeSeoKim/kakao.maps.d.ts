# kakao.maps.d.ts

TypeScript Definitions for kakao.maps.* (Kakao(구 Daum) 지도 Web API)

## 목적

타입스크립트로 개발하면서 `kakao.maps.*` API를 사용하고 싶은데, 타입 정의 파일(*.d.ts)이 없어서 불편했습니다. [카카오 개발자](https://developers.kakao.com/)에도 없고, [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)에서 찾아봐도 없고, 분명 사용하고 있는 곳은 많을텐데 공유해주시는 분도 없었습니다.

~~**그래서 [무스마 기술연구소](https://www.musma.net/)에서 공유해드립니다.**~~

**`daum map` 에서 `kakao map` 으로 변경되었지만 업데이트가 없어서 [JaeSeoKim](https://github.com/jaeSeoKim/)이 다시 공유해드립니다.**

## 사용법

이 패키지는 타입 정의만 포함하고 있습니다. 실제 구현은 Kakao(구 Daum) 지도 API를 불러와야 합니다.

[카카오 지도 Web API 사용법](https://apis.map.kakao.com/web/guide/)

```html
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."></script>
```

그리고 package.json에 devDependencies로 추가합니다.

```bash
# npm
$ npm install kakao.maps.d.ts --save-dev

# yarn
$ yarn add kakao.maps.d.ts --dev
```

그리고 tsconfig.json의 `compilerOptions.types` 속성에 패키지를 추가하시면 됩니다.

```js
{
  ...,
  "compilerOptions": {
    ...,
    "types": [
      ...,
      "kakao.maps.d.ts"
    ]
  }
}
```

## 기여하기

아직 Kakao(구 Daum) 지도 Web API를 100% 정의하지 못했습니다.

필요한 부분을 보완해서 Pull Request를 보내주시면 같이 잘 쓰도록 하겠습니다.

## 저작권과 라이선스

- API 명세는 카카오 소유입니다.
- MIT 라이선스로 제공되니 알아서 잘 쓰시고, 웬만하면 여기에 공유해서 같이 쓰도록 합시다.

## 형제 오픈소스 프로젝트

- [react-kakao-maps-sdk](https://github.com/JaeSeoKim/react-kakao-maps-sdk)
