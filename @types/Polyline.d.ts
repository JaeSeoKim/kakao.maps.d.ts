/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * 폴리라인 객체
   *
   * @see [Polyline](http://apis.map.kakao.com/web/documentation/#Polyline)
   */
  export class Polyline implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 폴리라인을 생성한다.
     *
     * @param options
     */
    constructor(options: PolylineOptions);

    /**
     * 지도에 폴리라인을 올린다.
     * null 을 지정하면 폴리라인을 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | null): void;

    /**
     * 폴리라인이 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | null;

    /**
     * 폴리라인의 옵션을 설정한다.
     */
    public setOptions(options: setPolylineOptions): void;

    /**
     * 폴리라인의 경로를 지정한다.
     * 경로는 좌표의 배열로 표현한다.
     *
     * @param path
     */
    public setPath(path: LatLng[] | LatLng[][]): void;

    /**
     * 폴리라인의 경로를 반환한다.
     */
    public getPath(): LatLng[] | LatLng[][];

    /**
     * 폴리라인의 총 길이를 m(미터)단위로 반환한다.
     */
    public getLength(): number;

    /**
     * 폴리라인의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void;

    /**
     * 폴리라인의 z-index를 반환한다.
     */
    public getZIndex(): number;
  }

  export type setPolylineOptions = Partial<PolylineOptions>

  export interface PolylineOptions {
    /**
     * 폴리라인이 올라갈 지도 또는 로드뷰
     */
    map?: Map;

    /**
     * 화살표 여부
     */
    endArrow?: boolean;

    /**
     * 폴리라인을 구성하는 좌표의 배열 또는 좌표 배열의 배열
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
     * 선의 z-index 속성 값
     */
    zIndex?: number;
  }
}
