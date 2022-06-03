/// <reference path="index.d.ts" />

/**
 * 지도 객체의 이벤트 관련 함수를 담은 네임스페이스
 */
declare namespace kakao.maps.event {
  /**
   * 마우스 이벤트로 넘겨 받는 인자
   * 직접 생성할 수는 없으며 이벤트 핸들러에서 내부적으로 생성된 객체를 parameter로 받아 사용한다.
   *
   * @see [MouseEvent](http://apis.map.kakao.com/web/documentation/#MouseEvent)
   */
  export interface MouseEvent {
    /**
     * 지도 좌표
     */
    latLng: kakao.maps.LatLng;

    /**
     * 화면 좌표
     */
    point: kakao.maps.Point;
  }
}
