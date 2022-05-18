/// <reference path="index.d.ts" />

/**
 * drawing 라이브러리 네임스페이스.
 * 지도 API의 마커객체와 그리기 요소를 쉽게 지도 위에 그릴 수 있도록 기능을 제공한다
 * 라이브러리를 사용하기 위해서는 반드시 별도 로드 해야 한다.
 */
declare namespace kakao.maps.drawing {
  /**
   * drawing 라이브러리로 그리기를 제공할 오버레이 타입이 상수로 정의되어 있다.
   */
  export enum OverlayType {
    /**
     * 마커
     */
    MARKER = "marker",
    /**
     * 사각형
     */
    RECTANGLE = "rectangle",
    /**
     * 원
     */
    CIRCLE = "circle",
    /**
     * 타원
     */
    ELLIPSE = "ellipse",
    /**
     * 선
     */
    POLYLINE = "polyline",
    /**
     * 끝점에 화살표가 표시된 선
     */
    ARROW = "arrow",
    /**
     * 다각형
     */
    POLYGON = "polygon",
  }
}
