/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [Polygon](http://apis.map.kakao.com/web/documentation/#Polygon)
   */
  export class Polygon implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 다각형을 생성한다.
     *
     * @param options
     */
    constructor(options: PolygonOptions);

    /**
     * 지도에 다각형을 올린다.
     * null 을 지정하면 다각형을 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null): void;

    /**
     * 다각형이 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null;

    /**
     * 다각형의 옵션을 설정한다.
     *
     * @param options
     */
    public setOptions(options: setPolygonOptions): void;

    /**
     * 다각형의 경로를 지정한다.
     * 경로는 좌표의 배열로 표현한다.
     *
     * @param path
     */
    public setPath(path: LatLng[] | LatLng[][]): void;

    /**
     * 다각형의 경로를 반환한다.
     */
    public getPath(): LatLng[] | LatLng[][];

    /**
     * 다각형의 총 길이를 m(미터)단위로 반환한다.
     */
    public getLength(): number;

    /**
     * 다각형으로 둘러싸인 영역의 넓이를 ㎡(제곱미터)단위로 반환한다.
     */
    public getArea(): number;

    /**
     * 다각형의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void;

    /**
     * 다각형의 z-index를 반환한다.
     */
    public getZIndex(): number;
  }

  export type setPolygonOptions = Partial<PolygonOptions>;

  export interface PolygonOptions {
    /**
     * 다각형이 올라갈 지도
     */
    map?: Map;

    /**
     * #xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)
     */
    fillColor?: string;

    /**
     * 채움 불투명도 (0-1) (기본값: 0)
     */
    fillOpacity?: number;

    /**
     * 다각형을 구성하는 좌표의 배열 혹은 좌표 배열의 배열
     */
    path: LatLng[] | LatLng[][];

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
     * 다각형의 z-index 속성 값
     */
    zIndex?: number;
  }
}
