/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [InfoWindow](https://apis.map.kakao.com/web/documentation/#InfoWindow)
   */
  export class InfoWindow {
    /**
     * 주어진 객체로 인포윈도우를 생성한다.
     * 지도 뿐만 아니라 로드뷰 위에도 올릴 수 있다.
     */
    constructor(options: InfoWindowOptions);

    /**
     * 지도에 인포윈도우를 올린다.
     * marker가 주어지면, 해당 마커에서 열린 효과를 낸다.
     * 로드뷰에서도 같은 동작을 한다.
     */
    public open(map_or_roadview: Map | Roadview, marker?: Marker): void;

    /**
     * 인포윈도우를 제거한다.
     */
    public close(): void;

    /**
     * 인포윈도우가 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | Roadview;

    /**
     * 인포윈도우의 좌표를 지정한다.
     * 로드뷰의 특정 시점에 고정하기 위해서 Viewpoint 객체를 사용할 수도 있다.
     * panoId를 지정한 Viewpoint 를 사용하면 panoId에 해당하는 로드뷰 위치에서만 보이게 된다.
     */
    public setPosition(position: LatLng | Viewpoint): void;

    /**
     * 인포윈도우의 좌표를 반환한다.
     */
    public getPosition(): LatLng;

    /**
     * 인포윈도우의 내용을 지정한다.
     * 엘리먼트 또는 HTML 문자열을 지정할 수 있다.
     */
    public setContent(content: string | HTMLElement): void;

    /**
     * 인포윈도우의 내용을 지정했던 형태로 반환한다.
     */
    public getContent(): string | HTMLElement;

    /**
     * 인포윈도우의 z-index를 설정한다.
     */
    public setZIndex(zIndex: number): void;

    /**
     * 인포윈도우의 z-index를 반환한다.
     */
    public getZIndex(): number;

    /**
     * 로드뷰상에서 인포윈도우의 높이(위치)를 지정한다.
     * 단위는 m(미터)이며 현재 로드뷰의 바닥 높이를 기준으로 떨어져있는 높이를 말한다.
     */
    public setAltitude(altitude: number): void;

    /**
     * 인포윈도우의 높이(위치)를 반환한다.
     * 단위는 m(미터).
     */
    public getAltitude(): number;

    /**
     * 인포윈도우의 가시반경을 설정한다.
     * 로드뷰의 위치와 인포윈도우의 위치 사이의 거리가 가시반경 이내일 경우에만 로드뷰상에 노출된다.
     * 단위는 m(미터)이며 기본값은 500m이다.
     */
    public setRange(range: number): void;

    /**
     * 인포윈도우의 가시반경을 반환한다.
     * 단위는 m(미터).
     */
    public getRange(): number;
  }

  export interface InfoWindowOptions {
    /**
     * 엘리먼트 또는 HTML 문자열 형태의 내용
     */
    content?: string | HTMLElement;


    /**
     * 인포윈도우의 좌표
     */
    position?: LatLng | Viewpoint;

    /**
     * 인포윈도우가 올라갈 지도 또는 로드뷰
     */
    map?: Map | Roadview;

    /**
     * 인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부 (기본값: false)
     */
    disableAutoPan?: boolean;

    /**
     * 삭제 가능한 인포윈도우
     */
    removable?: boolean;

    /**
     * 인포윈도우 엘리먼트의 z-index 속성 값
     */
    zIndex?: number;

    /**
     * 로드뷰에 올라있는 인포윈도우의 높이 값(m 단위)
     */
    altitude?: number;

    /**
     * 로드뷰 상에서 인포윈도우의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 인포윈도우는 보이지 않게 된다
     */
    range?: number;
  }
}
