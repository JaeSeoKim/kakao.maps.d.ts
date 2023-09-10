/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [Marker](http://apis.map.kakao.com/web/documentation/#Marker)
   */
  export class Marker implements kakao.maps.event.EventTarget {
    /**
     * 주어진 객체로 마커를 생성한다.
     * 지도 뿐만 아니라 로드뷰 위에도 올릴 수 있다.
     *
     * @param options
     */
    constructor(options: MarkerOptions);

    /**
     * 지도 또는 로드뷰에 마커를 올린다.
     * null 을 지정하면 마커를 제거한다.
     *
     * @param map
     */
    public setMap(map: Map | Roadview | null): void;

    /**
     * 마커가 올라가있는 지도를 반환한다.
     */
    public getMap(): Map | Roadview | null;

    /**
     * 마커에 새 MarkerImage를 지정한다.
     *
     * @param image
     */
    public setImage(image: MarkerImage): void;

    /**
     * 마커의 MarkerImage를 반환한다.
     */
    public getImage(): MarkerImage | undefined;

    /**
     * 마커의 좌표를 지정한다.
     * 로드뷰의 특정 시점에 고정하기 위해서 Viewpoint 객체를 사용할 수도 있다.
     * panoId를 지정한 Viewpoint 를 사용하면 panoId에 해당하는 로드뷰 위치에서만 보이게 된다.
     *
     * @param position
     */
    public setPosition(position: LatLng | Viewpoint): void;

    /**
     * 마커의 좌표를 반환한다.
     */
    public getPosition(): LatLng;

    /**
     * 마커의 z-index를 설정한다.
     *
     * @param zIndex
     */
    public setZIndex(zIndex: number): void;

    /**
     * 마커의 z-index를 반환한다.
     */
    public getZIndex(): number;

    /**
     * 마커의 표시 여부를 지정한다.
     *
     * @param visible
     */
    public setVisible(visible: boolean): void;

    /**
     * 마커의 표시 여부를 반환한다.
     */
    public getVisible(): boolean;

    /**
     * 마커의 툴팁을 설정한다.
     *
     * @param title
     */
    public setTitle(title: string): void;

    /**
     * 마커의 툴팁을 반환한다.
     */
    public getTitle(): string;

    /**
     * 드래그 가능 여부를 지정한다.
     * 로드뷰에 올라가 있을 경우에는 마커의 드래그 기능을 비활성화 되기 때문에
     * 지도에 올라가 있을 경우에만 의미가 있다.
     *
     * @param draggable
     */
    public setDraggable(draggable: boolean): void;

    /**
     * 드래그 가능 여부를 반환한다.
     */
    public getDraggable(): boolean;

    /**
     * 클릭 가능 여부를 지정한다.
     * true 로 지정하게 되면 마커를 클릭 했을 때, 지도의 클릭 이벤트가 발생하지 않도록 막아준다.
     *
     * @param clickable
     */
    public setClickable(clickable: boolean): void;

    /**
     * 클릭 가능 여부를 반환한다.
     */
    public getClickable(): boolean;

    /**
     * 로드뷰상에서 마커의 높이(위치)를 지정한다.
     * 단위는 m(미터)이며 현재 로드뷰의 바닥 높이를 기준으로 떨어져있는 높이를 말한다.
     *
     * @param altitude
     */
    public setAltitude(altitude: number): void;

    /**
     * 마커의 높이(위치)를 반환한다.
     * 단위는 m(미터).
     */
    public getAltitude(): number;

    /**
     * 마커의 가시반경을 설정한다.
     * 로드뷰의 위치와 마커의 위치 사이의 거리가 가시반경 이내일 경우에만 로드뷰상에 노출된다.
     * 단위는 m(미터)이며 기본값은 500m이다.
     *
     * @param range
     */
    public setRange(range: number): void;

    /**
     * 마커의 가시반경을 반환한다.
     * 단위는 m(미터).
     */
    public getRange(): number;

    /**
     * 마커의 투명도를 설정한다. (0-1)
     *
     * @param opacity
     */
    public setOpacity(opacity: number): void;

    /**
     * 마커의 투명도를 반환한다.
     */
    public getOpacity(): number;
  }

  export interface MarkerOptions {
    /**
     * 마커가 올라갈 지도 또는 로드뷰
     */
    map?: Map | Roadview;

    /**
     * 마커의 좌표 또는 로드뷰에서의 시점
     */
    position: LatLng | Viewpoint;

    /**
     * 마커의 이미지
     */
    image?: MarkerImage;

    /**
     * 마커 엘리먼트의 타이틀 속성 값 (툴팁)
     */
    title?: string;

    /**
     * 드래그 가능한 마커, 로드뷰에 올릴 경우에는 유효하지 않다.
     */
    draggable?: boolean;

    /**
     * 클릭 가능한 마커
     */
    clickable?: boolean;

    /**
     * 마커 엘리먼트의 z-index 속성 값
     */
    zIndex?: number;

    /**
     * 마커 투명도 (0-1)
     */
    opacity?: number;

    /**
     * 로드뷰에 올라있는 마커의 높이 값(m 단위)
     */
    altitude?: number;

    /**
     * 로드뷰 상에서 마커의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 마커는 로드뷰에서 보이지 않게 된다.
     */
    range?: number;
  }
}
