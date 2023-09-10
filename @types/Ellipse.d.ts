/// <reference path="index.d.ts" />

declare namespace kakao.maps {
  /**
   * @see [Ellipse](http://apis.map.kakao.com/web/documentation/#Ellipse)
   */
  export class Ellipse implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 타원을 생성한다.
     *
     * @param options
     */
    constructor(options: EllipseOptions);

    /**
     * 지도에 타원을 올린다.
     * null 을 지정하면 타원을 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null): void;

    /**
     * 타원이 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null;

    /**
     * 타원의 옵션을 설정한다.
     */
    public setOptions(options: setEllipseOptions): void;

    /**
     * 타원의 중심 좌표를 지정한다.
     *
     * @param position
     */
    public setPosition(position: LatLng): void;

    /**
     * 타원 중심의 좌표를 반환한다.
     */
    public getPosition(): LatLng;

    /**
     * 타원의 반지름을 m(미터)단위로 지정한다.
     *
     * @param rx
     * @param ry
     */
    public setRadius(rx: number, ry: number): void;

    /**
     * 타원의 x, y축 반지름을 반환한다.
     */
    public getRadius(): {
      rx: number;
      ry: number;
    };

    /**
     * 타원의 x축 반지름을 반환한다.
     */
    public getRadiusX(): number;

    /**
     * 타원의 x축 반지름을 반환한다.
     */
    public getRadiusY(): number;

    /**
     * 타원을 포함하는 최소의 사각형 영역을 구한다.
     */
    public getBounds(): LatLngBounds;

    /**
     * 타원의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void;

    /**
     * 타원의 z-index를 반환한다.
     */
    public getZIndex(): number;
  }

  type setEllipseOptions = Partial<EllipseOptions>;

  export interface EllipseOptions {
    /**
     * 타원이 올라갈 지도
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
     * 미터 단위의 x축 반지름
     */
    rx: number;

    /**
     * 미터 단위의 y축 반지름
     */
    ry: number;

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
     * 타원의 z-index 속성 값
     */
    zIndex?: number;
  }
}
