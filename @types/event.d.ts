/// <reference path="index.d.ts" />

/**
 * 지도 객체의 이벤트 관련 함수를 담은 네임스페이스
 */
declare namespace kakao.maps.event {
  /**
   * 이벤트를 지원하는 다음 지도 API 객체
   */
  export interface EventTarget {}

  /**
   * 다음 지도 API 객체에 이벤트를 등록한다.
   *
   * @param target 이벤트를 지원하는 다음 지도 API 객체
   * @param type 이벤트 이름
   * @param handler 이벤트를 처리할 함수
   */
  export function addListener(
    target: EventTarget,
    type: string,
    handler: Function
  ): void;

  /**
   * 다음 지도 API 객체에 등록된 이벤트를 제거한다.
   *
   * @param target 이벤트를 지원하는 다음 지도 API 객체
   * @param type 이벤트 이름Î
   * @param handler 이벤트를 처리하던 함수
   */
  export function removeListener(
    target: EventTarget,
    type: string,
    handler: Function
  ): void;

  /**
   * 다음 지도 API 객체에 등록된 이벤트를 발생시킨다.
   *
   * @param target 이벤트를 지원하는 다음 지도 API 객체
   * @param type 이벤트 이름
   * @param data 이벤트를 처리하는 함수에 넘길 변수
   */
  export function trigger(target: EventTarget, type: string, data?: any): void;

  /**
   * 다음 Map 객체의 이벤트를 막는다.
   * 보통 CustomOverlay의 content 혹은 외부 Element의 이벤트 핸들러에서 지도의 이벤트를 막고 싶을 경우 사용한다.
   * 이벤트의 핸들러 내부에서 이 함수를 사용하며, 이벤트의 핸들링이 끝나면 Map 객체의 이벤트는 다시 정상 동작하게 된다.
   */
  export function preventMap(): void;
}
