/// <reference path="index.d.ts" />

declare namespace kakao.maps {
  /**
   * @see [Circle](http://apis.map.kakao.com/web/documentation/#Circle)
   */
  export class Circle implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 원을 생성한다.
     *
     * @param options
     */
    constructor(options: CircleOptions);

    /**
     * 지도에 원을 올린다.
     * null 을 지정하면 원을 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null): void;

    /**
     * 원이 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null;

    /**
     * 원의 옵션을 설정한다.
     */
    public setOptions(options: setCircleOptions): void;

    /**
     * 원의 중심 좌표를 지정한다.
     *
     * @param position
     */
    public setPosition(position: LatLng): void;

    /**
     * 원 중심의 좌표를 반환한다.
     */
    public getPosition(): LatLng;

    /**
     * 원의 반지름을 m(미터)단위로 지정한다.
     *
     * @param radius
     */
    public setRadius(radius: number): void;

    /**
     * 원의 반지름을 반환한다.
     */
    public getRadius(): number;

    /**
     * 원을 포함하는 최소의 사각형 영역을 구한다.
     */
    public getBounds(): LatLngBounds;

    /**
     * 원의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void;

    /**
     * 원의 z-index를 반환한다.
     */
    public getZIndex(): number;
  }

  type setCircleOptions = Partial<CircleOptions>;

  export interface CircleOptions {
    /**
     * 원이 올라갈 지도
     */
    map?: Map;

    /**
     * 중심 좌표
     */
    center: LatLng;

    /**
     * #xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)
     */
    fillColor?: string;

    /**
     * 채움 불투명도 (0-1) (기본값: 0)
     */
    fillOpacity?: number;

    /**
     * 미터 단위의 반지름
     */
    radius: number;

    /**
     * 픽셀 단위의 선 두께 (기본값: 3)
     */
    strokeWeight?: number;

    /**
     * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
     */
    strokeColor?: string;

    /**
     * 선 불투명도 (0-1) (기본값: 0.6)
     */
    strokeOpacity?: number;

    /**
     * 선 스타일 (기본값: ‘solid’)
     */
    strokeStyle?: StrokeStyles;

    /**
     * 원의 z-index 속성 값
     */
    zIndex?: number;
  }
}
