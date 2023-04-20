/// <reference path="index.d.ts" />

declare namespace kakao.maps {
  /**
   * @see [CustomOverlay](http://apis.map.kakao.com/web/documentation/#CustomOverlay)
   */
  export class CustomOverlay implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 커스텀 오버레이를 생성한다.
     * 지도 뿐만 아니라 로드뷰 위에도 올릴 수 있다.
     *
     * @param options
     */
    constructor(options: CustomOverlayOptions);

    /**
     * 지도 또는 로드뷰에 커스텀 오버레이를 올린다.
     * null 을 지정하면 오버레이를 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | Roadview | null): void;

    /**
     * 커스텀 오버레이가 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null;

    /**
     * 커스텀 오버레이의 좌표를 지정한다.
     * 로드뷰의 특정 시점에 고정하기 위해서 Viewpoint 객체를 사용할 수도 있다.
     * panoId를 지정한 Viewpoint 를 사용하면 panoId에 해당하는 로드뷰 위치에서만 보이게 된다.
     *
     * @param position
     */
    public setPosition(position: LatLng | Viewpoint): void;

    /**
     * 커스텀 오버레이의 좌표를 반환한다.
     */
    public getPosition(): LatLng;

    /**
     * 커스텀 오버레이의 내용을 지정한다.
     * 엘리먼트 또는 HTML 문자열을 지정할 수 있다.
     *
     * @param content
     */
    public setContent(content: HTMLElement | string): void;

    /**
     * 커스텀 오버레이의 내용을 지정했던 형태로 반환한다.
     */
    public getContent(): HTMLElement | string;

    /**
     * 커스텀 오버레이의 표시 여부를 지정한다.
     *
     * @param visible
     */
    public setVisible(visible: boolean): void;

    /**
     * 커스텀 오버레이의 표시 여부를 반환한다.
     */
    public getVisible(): boolean;

    /**
     * 커스텀 오버레이의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void;

    /**
     * 커스텀 오버레이의 z-index를 반환한다.
     */
    public getZIndex(): number;

    /**
     * 로드뷰상에서 커스텀 오버레이의 높이(위치)를 지정한다.
     * 단위는 m(미터)이며 현재 로드뷰의 바닥 높이를 기준으로 떨어져있는 높이를 말한다.
     *
     * @param altitude
     */
    public setAltitude(altitude: number): void;

    /**
     * 커스텀 오버레이의 높이(위치)를 반환한다.
     * 단위는 m(미터).
     */
    public getAltitude(): number;

    /**
     * 커스텀 오버레이의 가시반경을 설정한다.
     * 로드뷰의 위치와 커스텀 오버레이의 위치 사이의 거리가 가시반경 이내일 경우에만 로드뷰상에 노출된다.
     * 단위는 m(미터)이며 기본값은 500m이다.
     *
     * @param range
     * @default 500
     */
    public setRange(range: number): void;

    /**
     * 커스텀 오버레이의 가시반경을 반환한다.
     * 단위는 m(미터).
     */
    public getRange(): number;
  }

  export interface CustomOverlayOptions {
    /**
     * true 로 설정하면 컨텐츠 영역을 클릭했을 경우 지도 이벤트를 막아준다.
     */
    clickable?: boolean;

    /**
     * 엘리먼트 또는 HTML 문자열 형태의 내용
     */
    content?: HTMLElement | string;

    /**
     * 커스텀 오버레이가 올라갈 지도 또는 로드뷰
     */
    map?: Roadview | Map;

    /**
     * 커스텀 오버레이의 좌표 또는 로드뷰에서의 시점
     */
    position: LatLng | Viewpoint;

    /**
     * 컨텐츠의 x축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
     */
    xAnchor?: number;

    /**
     * 컨텐츠의 y축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
     */
    yAnchor?: number;

    /**
     * 커스텀 오버레이의 z-index
     */
    zIndex?: number;
  }
}
