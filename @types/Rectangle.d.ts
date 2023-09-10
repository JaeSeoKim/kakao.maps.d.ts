/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [Rectangle](http://apis.map.kakao.com/web/documentation/#Rectangle)
   */
  export class Rectangle implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 사각형를 생성한다.
     *
     * @param options
     */
    constructor(options: RectangleOptions);

    /**
     * 지도에 사각형을 올린다.
     * null 을 지정하면 사각형을 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null): void;

    /**
     * 사각형이 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null;

    /**
     * 사각형의 옵션을 설정한다.
     *
     * @param options
     */
    public setOptions(options: setRectangleOptions): void;

    /**
     * 사각형의 영역을 지정한다.
     *
     * @param bounds
     */
    public setBounds(bounds: LatLngBounds): void;

    /**
     * 사각형의 영역을 반환한다.
     */
    public getBounds(): LatLngBounds;

    /**
     * 사각형의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void;

    /**
     * 사각형의 z-index를 반환한다.
     */
    public getZIndex(): number;
  }

  export type setRectangleOptions = Partial<RectangleOptions>;

  export interface RectangleOptions {
    /**
     * 사각형이 올라갈 지도
     */
    map?: Map;

    /**
     * 사각형의 영역
     */
    bounds: LatLngBounds;

    /**
     * #xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)
     */
    fillColor?: string;

    /**
     * 채움 불투명도 (0-1) (기본값: 0)
     */
    fillOpacity?: number;

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
     * 사각형의 z-index 속성 값
     */
    zIndex?: number;
  }
}
