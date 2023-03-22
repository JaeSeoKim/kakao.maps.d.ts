/// <reference path="index.d.ts" />

declare namespace kakao.maps {
  /**
   * @see [Map](http://apis.map.kakao.com/web/documentation/#Map)
   */
  export class Map implements kakao.maps.event.EventTarget {
    /**
     * 지도를 생성한다.
     *
     * @param container 지도가 표시될 HTML element
     * @param options
     */
    constructor(container: HTMLElement, options: MapOptions);

    /**
     * 지도의 중심 좌표를 설정한다.
     *
     * @param latlng
     */
    public setCenter(latlng: LatLng | Coords): void;

    /**
     * 지도의 중심 좌표를 반환한다.
     */
    public getCenter(): LatLng;

    /**
     * 지도의 확대 수준을 설정한다.
     * MapTypeId 의 종류에 따라 설정 범위가 다르다.
     * SKYVIEW, HYBRID 일 경우 0 ~ 14, ROADMAP 일 경우 1 ~ 14.
     *
     * @param level
     * @param options
     */
    public setLevel(
      level: number,
      options?: {
        /**
         * 지도 확대수준 변경 시 애니메이션 효과 여부
         * (현재 지도 레벨과의 차이가 2 이하인 경우에만 애니메이션 효과 가능)
         */
        animate?:
          | boolean
          | {
              /**
               * 애니메이션 효과 지속 시간 (단위: ms)
               */
              duration: number;
            };
        /**
         * 지도 확대수준 변경 시 기준 좌표
         */
        anchor?: LatLng;
      }
    ): void;

    /**
     * 지도의 확대 수준을 반환한다.
     */
    public getLevel(): number;

    /**
     * 지도의 타입을 설정한다.
     *
     * @param mapTypeId
     */
    public setMapTypeId(mapTypeId: MapTypeId): void;

    /**
     * 지도의 타입을 반환한다.
     */
    public getMapTypeId(): MapTypeId;

    /**
     * 주어진 영역이 화면 안에 전부 나타날 수 있도록 지도의 중심 좌표와 확대 수준을 설정한다.
     * 주어진 영역외에 추가로 padding값을 지정할 수 있다. 2번째 파라메터부터 top, right, bottom, left값이며
     * 파라메터를 1개 이상 지정한 경우 지정하지 않은 파라메터에 대해서는 CSS의 padding rule을 따른다.
     * (ex. paddingTop:100, paddingRight:50 을 지정한 경우. top, right, bottom, left 순서로 100 50 100 50)
     * padding값을 지정하지 않으면 기본값으로 상하좌우 32가 적용된다.
     *
     * @param bounds
     * @param paddingTop
     * @param paddingRight
     * @param paddingBottom
     * @param paddingLeft
     */
    public setBounds(
      bounds: LatLngBounds,
      paddingTop?: number,
      paddingRight?: number,
      paddingBottom?: number,
      paddingLeft?: number
    ): void;

    /**
     * 지도의 영역을 반환한다.
     */
    public getBounds(): LatLngBounds;

    /**
     * 지도의 최저 레벨 값을 설정한다.
     * 기본적으로 레벨 값이 작을수록 지도는 확대되는데
     * 이 함수로 설정한 레벨까지만 확대할 수 있게 된다.
     *
     * @param minLevel
     */
    public setMinLevel(minLevel: number): void;

    /**
     * 지도의 최고 레벨 값을 설정한다.
     * 기본적으로 레벨 값이 클수록 지도는 축소되는데
     * 이 함수로 설정한 레벨까지만 축소할 수 있게 된다.
     *
     * @param maxLevel
     */
    public setMaxLevel(maxLevel: number): void;

    /**
     * 중심 좌표를 지정한 픽셀 만큼 부드럽게 이동한다.
     * 만약 이동할 거리가 지도 화면의 크기보다 클 경우 애니메이션 없이 이동한다.
     *
     * @param dx
     * @param dy
     */
    public panBy(dx: number, dy: number): void;

    /**
     * 중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동한다. 필요하면 확대 또는 축소도 수행한다.
     * 만약 이동할 거리가 지도 화면의 크기보다 클 경우 애니메이션 없이 이동한다.
     * padding 만큼 제외하고 영역을 계산하며, padding 을 지정하지 않으면 기본값으로 32가 사용된다.
     *
     * @param latlng_or_bounds
     * @param padding
     */
    public panTo(
      latlng_or_bounds: LatLng | LatLngBounds | Coords,
      padding?: number
    ): void;

    /**
     * 지도에 컨트롤을 추가한다.
     *
     * @param control
     * @param position
     */
    public addControl(
      control: MapTypeControl | ZoomControl | kakao.maps.drawing.ToolboxElement,
      position: ControlPosition
    ): void;

    /**
     * 지도에서 컨트롤을 제거한다.
     *
     * @param control
     */
    public removeControl(
      control: MapTypeControl | ZoomControl | kakao.maps.drawing.ToolboxElement
    ): void;

    /**
     * 마우스 드래그와 모바일 터치를 이용한 지도 이동 가능 여부를 설정한다.
     *
     * @param draggable
     */
    public setDraggable(draggable: boolean): void;

    /**
     * 마우스 드래그와 모바일 터치를 이용한 지도 이동 가능 여부를 반환한다.
     */
    public getDraggable(): boolean;

    /**
     * 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소 가능 여부를 설정한다.
     * 지도 객체 함수 호출을 통한 확대, 축소는 동작한다.
     *
     * @param zoomable
     */
    public setZoomable(zoomable: boolean): void;

    /**
     * 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소 가능 여부를 반환한다.
     */
    public getZoomable(): boolean;

    /**
     * 지도의 projectionId를 지정한다.
     * 이 메소드로 API 내부의 좌표계의 투영 방법을 설정할 수 있다.
     * 기본값은 kakao.maps.ProjectionId.WCONG
     *
     * @param projectionId
     */
    public setProjectionId(projectionId: ProjectionId): void;

    /**
     * 지도의 projectionId를 반환한다.
     */
    public getProjectionId(): ProjectionId;

    /**
     * 지도를 표시하는 HTML element의 크기를 변경한 후에는 반드시 이 함수를 호출해야 한다.
     * 단, window의 resize 이벤트에 대해서는 자동으로 호출한다.
     */
    public relayout(): void;

    /**
     * 지도에 로드뷰, 교통정보 등의 오버레이 타입의 타일 이미지를 올린다.
     * 로드뷰 타일 이미지를 추가할 경우 RoadviewOverlay 와 동일한 기능을 수행한다.
     *
     * @param mapTypeId
     */
    public addOverlayMapTypeId(mapTypeId: MapTypeId): void;

    /**
     * 지도에 로드뷰, 교통정보 등의 오버레이 타입의 타일 이미지를 삭제한다.
     *
     * @param mapTypeId
     */
    public removeOverlayMapTypeId(mapTypeId: MapTypeId): void;

    /**
     * 키보드의 방향키와 +,-키로 지도 이동,확대,축소 가능여부를 설정한다.
     *
     * @param active
     */
    public setKeyboardShortcuts(active: boolean): void;

    /**
     * 키보드의 방향키와 +,-키로 지도 이동,확대,축소 가능여부를 반환한다.
     */
    public getKeyboardShortcuts(): boolean;

    /**
     * copyright의 위치를 설정한다.
     *
     * @param CopyrightPosition
     * @param reversed
     */
    public setCopyrightPosition(
      copyrightPosition: CopyrightPosition,
      reversed?: boolean
    ): void;

    /**
     * 지도의 좌표 변환 객체를 반환한다.
     */
    public getProjection(): MapProjection;

    /**
     * 지도 위에 마우스 커서가 위치할 경우 보여지는 커서의 스타일을 지정한다.
     *
     * @param style
     */
    public setCursor(style: string): void;

    /**
     * 지도가 그려지고 있는 HTMLElement 를 반환 합니다.
     */
    public getNode(): HTMLElement;
  }

  export interface MapOptions {
    /**
     * 중심 좌표 (필수)
     */
    center: LatLng | Coords;

    /**
     * 확대 수준 (기본값: 3)
     */
    level?: number;

    /**
     * 지도 종류 (기본값: 일반 지도)
     */
    mapTypeId?: MapTypeId;

    /**
     * 마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부
     */
    draggable?: boolean;

    /**
     * 마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부
     */
    scrollwheel?: boolean;

    /**
     * 더블클릭 이벤트 및 더블클릭 확대 가능 여부
     */
    disableDoubleClick?: boolean;

    /**
     * 더블클릭 확대 가능 여부
     */
    disableDoubleClickZoom?: boolean;

    /**
     * 투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG)
     */
    projectionId?: ProjectionId;

    /**
     * 지도 타일 애니메이션 설정 여부 (기본값: true)
     */
    tileAnimation?: boolean;

    /**
     * 키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)
     */
    keyboardShortcuts?:
      | boolean
      | {
          /**
           * 지도 이동 속도
           */
          speed: number;
        };
  }
}
