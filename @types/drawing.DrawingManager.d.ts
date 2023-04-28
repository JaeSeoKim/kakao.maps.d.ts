/// <reference path="index.d.ts" />

declare namespace kakao.maps.drawing {
  /**
   * @see [drawing.DrawingManager](https://apis.map.kakao.com/web/documentation/#drawing_DrawingManager)
   */
  export class DrawingManager<T extends OverlayType = OverlayType>
    implements kakao.maps.event.EventTarget
  {
    /**
     * 그리기 관리자 객체를 생성한다.
     * @param options
     */
    constructor(options: DrawingManagerOptions<T>);

    /**
     * 특정 그리기 요소의 스타일 속성을 설정한다.
     *
     * @param type 속성을 설정할 그리기 요소 타입
     * @param prop 설정할 속성 이름
     * @param value 설정할 속성 값
     */
    public setStyle(
      type: T | `${T}`,
      prop: string,
      value: string | number
    ): void;

    /**
     * 선을 사용하는 모든 그리기 요소들의 선 굵기를 설정한다.
     *
     * @param strokeWeight 선의 두께
     */
    public setStrokeWeight(strokeWeight: number): void;

    /**
     * 선을 사용하는 모든 그리기 요소들의 선 색을 설정한다.
     *
     * @param strokeColor #xxxxxx 형태의 선 색
     */
    public setStrokeColor(strokeColor: string): void;

    /**
     * 그리기 요소를 선택한다. 이미 선택한 상태에서 다시 호출하면 이 전 선택된 요소는 취소된다.
     * 여러개의 마커 이미지를 선언했을 경우, 두 번째 파라메터로 해당 마커 이미지의 인덱스 값을 넣는다. 인덱스 값은 0 부터 시작한다.
     *
     * @param type 선택할 그리기 요소 타입
     * @param index 마커 이미지의 인덱스
     */
    public select(type: T | `${T}`, index?: number): void;

    /**
     * 현재 그리기 요소로 선택한 것을 취소한다.
     */
    public cancel(): void;

    /**
     * 그리기 요소를 이전 상태로 되돌린다.
     * 그리기 요소의 생성/수정/이동/삭제 동작을 되돌릴 수 있고 여러번 호출이 가능하다.
     * 그리기 요소의 상태는 최대 20개 까지 저장된다.
     */
    public undo(): void;

    /**
     * 이전 상태로 되돌린 상태를 취소한다.
     * 여러번의 undo 호출 이후에 DrawingManager 객체에 그리기 요소에 대한 새로운 상태가 추가되지 않으면 되돌리기 이전 상태까지 실행할 수 있다.
     */
    public redo(): void;

    /**
     * 그리기 요소를 이전 상태로 되돌릴 수 있는지 여부를 반환한다.
     */
    public undoable(): boolean;

    /**
     * 이전으로 되돌린 상태를 취소할 수 있는지 여부를 반환한다.
     */
    public redoable(): boolean;

    /**
     * 지도에 그려진 요소들 중 선택한 요소의 데이터를 반환한다.
     * 요소를 지정하지 않으면 그려진 모든 요소의 데이터를 반환한다.
     */
    public getData(): {
      marker: Array<DrawingMarkerData>;
      rectangle: Array<DrawingRectangleData>;
      circle: Array<DrawingCircleData>;
      ellipse: Array<DrawingEllipseData>;
      polyline: Array<DrawingPolylineData>;
      arrow: Array<DrawingArrowData>;
      polygon: Array<DrawingPolylineData>;
    };

    /**
     * 지도에 그려진 요소들 중 선택한 요소의 데이터를 반환한다.
     * 요소를 지정하지 않으면 그려진 모든 요소의 데이터를 반환한다.
     */
    public getData<T extends OverlayType>(
      types: Array<T | `${T}`>
    ): Pick<
      {
        marker: Array<DrawingMarkerData>;
        rectangle: Array<DrawingRectangleData>;
        circle: Array<DrawingCircleData>;
        ellipse: Array<DrawingEllipseData>;
        polyline: Array<DrawingPolylineData>;
        arrow: Array<DrawingArrowData>;
        polygon: Array<DrawingPolylineData>;
      },
      `${T}`
    >;

    /**
     * 지도에 그려진 요소들 중 선택한 요소의 객체를 반환한다.
     * 요소를 지정하지 않으면 그려진 모든 요소의 객체를 반환한다.
     */
    public getOverlays(): {
      marker: Array<DrawingMarkerData>;
      rectangle: Array<DrawingRectangleData>;
      circle: Array<DrawingCircleData>;
      ellipse: Array<DrawingEllipseData>;
      polyline: Array<DrawingPolylineData>;
      arrow: Array<DrawingArrowData>;
      polygon: Array<DrawingPolylineData>;
    };

    /**
     * 지도에 그려진 요소들 중 선택한 요소의 객체를 반환한다.
     * 요소를 지정하지 않으면 그려진 모든 요소의 객체를 반환한다.
     */
    public getOverlays<T extends OverlayType>(
      types: Array<T | `${T}`>
    ): Pick<
      {
        marker: Array<DrawingMarkerData>;
        rectangle: Array<DrawingRectangleData>;
        circle: Array<DrawingCircleData>;
        ellipse: Array<DrawingEllipseData>;
        polyline: Array<DrawingPolylineData>;
        arrow: Array<DrawingArrowData>;
        polygon: Array<DrawingPolylineData>;
      },
      `${T}`
    >;

    /**
     * 그리기 관리자 객체에 그리기 요소를 넣는다.
     * 각 요소들의 스타일은 그리기 관리자에 이미 설정된 값을 따른다.
     *
     * @param overlayType 그리기 관리자에 추가할 오버레이 타입
     * @param position
     * @param index 마커 이미지의 인덱스
     */
    public put(
      overlayType: OverlayType.MARKER | `${OverlayType.MARKER}`,
      position: LatLng,
      index: number
    ): void;

    /**
     * 그리기 관리자 객체에 그리기 요소를 넣는다.
     * 각 요소들의 스타일은 그리기 관리자에 이미 설정된 값을 따른다.
     *
     * @param overlayType 그리기 관리자에 추가할 오버레이 타입
     * @param center
     * @param radius 반지름
     */
    public put(
      overlayType: OverlayType.CIRCLE | `${OverlayType.CIRCLE}`,
      center: LatLng,
      radius: number
    ): void;

    /**
     * 그리기 관리자 객체에 그리기 요소를 넣는다.
     * 각 요소들의 스타일은 그리기 관리자에 이미 설정된 값을 따른다.
     *
     * @param overlayType 그리기 관리자에 추가할 오버레이 타입
     * @param bounds
     */
    public put(
      overlayType: OverlayType.RECTANGLE | `${OverlayType.RECTANGLE}`,
      bounds: LatLngBounds
    ): void;

    /**
     * 그리기 관리자 객체에 그리기 요소를 넣는다.
     * 각 요소들의 스타일은 그리기 관리자에 이미 설정된 값을 따른다.
     *
     * @param overlayType 그리기 관리자에 추가할 오버레이 타입
     * @param paths
     */
    public put(
      overlayType:
        | Exclude<
            OverlayType,
            OverlayType.MARKER | OverlayType.CIRCLE | OverlayType.RECTANGLE
          >
        | `${Exclude<
            OverlayType,
            OverlayType.MARKER | OverlayType.CIRCLE | OverlayType.RECTANGLE
          >}`,
      paths: Array<LatLng>
    ): void;

    /**
     * 이미 그린 그리기 요소를 삭제한다.
     *
     * @param overlay 그리기 관리자에서 생성한 확장 오버레이 객체
     */
    public remove(overlay: ExtendsOverlay): void;

    /**
     * 그리기 관련 이벤트를 작업할 때 발생한다.
     *
     * @param event event 종류
     * @param callback
     */
    public addListener(
      event:
        | "drawstart"
        | "draw"
        | "drawend"
        | "drawnext"
        | "select"
        | "cancel"
        | "remove",
      callback: (e: kakao.maps.drawing.MouseEvent) => void
    ): void;

    /**
     * 그리기 요소들의 상태가 변경되면 발생한다.
     * 각 요소의 생성/수정/이동/삭제 동작과 undo 또는 redo 함수 호출이 이에 해당한다.
     * @param event
     * @param callback
     */
    public addListener(event: "state_changed", callback: () => void): void;
  }

  export type DrawingManagerOptions<T extends OverlayType> =
    Partial<OverlayOptions> &
      Pick<OverlayOptions, `${T}Options`> & {
        /**
         * 마커와 그리기 요소를 그릴 지도 객체
         */
        map: Map;

        /**
         * 마우스 오버 시 가이드 툴팁 표시 여부. ‘draw’, ‘drag’, ‘edit’ 3가지를 지정할 수 있다 (기본값: 모두 표시 안함)
         * 예를들어 [‘draw’]로 설정하면 객체를 그릴때 가이드 툴팁이 표시된다
         */
        guideTooltip?: Array<"draw" | "drag" | "edit">;
        /**
         * 사용할 그리기 요소 지정한다 (기본값: 모든 그리기 요소)
         */
        drawingMode?: Array<T | `${T}`>;
      };

  export type OverlayOptions = {
    /**
     * 마커 그리기 옵션
     */
    markerOptions: MarkerOptions;
    /**
     * 사각형 그리기 옵션
     */
    rectangleOptions: RectangleOptions;
    /**
     * 원 그리기 옵션
     */
    circleOptions: CircleOptions;
    /**
     * 타원 그리기 옵션
     */
    ellipseOptions: EllipseOptions;
    /**
     * 선 그리기 옵션
     */
    polylineOptions: PolylineOptions;
    /**
     * 화살표 선 그리기 옵션
     */
    arrowOptions: ArrowOptions;
    /**
     * 다각형 그리기 옵션
     */
    polygonOptions: PolygonOptions;
  };

  /**
   * DrawingManager 의 생성자 옵션에서 마커의 그리기 옵션인 markerOptions 에 설정 가능한 항목들을 설명한다.
   */
  export interface MarkerOptions {
    /**
     * 드래그 가능한 마커
     */
    draggable: boolean;
    /**
     * 삭제가 가능한 마커 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다)
     */
    removable: boolean;
    /**
     * 그릴 마커의 이미지를 설정한다 (기본값: API 기본 마커 이미지)
     */
    markerImages?: Array<null | MarkerImageOptions>;
  }

  export interface MarkerImageOption {
    /**
     * 마커 이미지 URL
     */
    src: string;
    /**
     * 마커의 너비
     */
    width: number;
    /**
     * 마커의 높이
     */
    height: number;
    /**
     * 마커의 좌표에 일치시킬 이미지 안의 X 좌표
     */
    offsetX: number;
    /**
     * 마커의 좌표에 일치시킬 이미지 안의 Y 좌표
     */
    offsetY: number;
    /**
     * 스프라이트 이미지의 전체 너비
     */
    spriteWidth: number;
    /**
     * 스프라이트 이미지의 전체 높이
     */
    spriteHeight: number;
    /**
     * 스프라이트 이미지에서 사용할 영역의 좌측 좌표
     */
    spriteOriginX: number;
    /**
     * 스프라이트 이미지에서 사용할 영역의 상단 좌표
     */
    spriteOriginY: number;
    /**
     * 마커의 클릭 또는 마우스오버 가능한 영역의 모양
     */
    shape: string;
    /**
     * 마커의 클릭 또는 마우스오버 가능한 영역을 표현하는 좌표값
     */
    coords: kakao.maps.services.Coords;
  }

  /**
   * 마커 그리기 옵션인 markerOptions 객체에 마커 마커 이미지를 설정하는 markerImages 에 설정 가능한 항목들을 설명한다.
   */
  export interface MarkerImageOptions extends MarkerImageOption {
    /**
     * 위에 설명된 항목들로 구성된다 (src, width, offsetX, offsetY, …)
     */
    hoverImage: MarkerImageOption;
    /**
     * 위에 설명된 항목들로 구성된다 (src, width, offsetX, offsetY, …)
     */
    dragImage: MarkerImageOption;
  }

  /**
   * DrawingManager 의 생성자 옵션에서 마커의 그리기 옵션인 rectangleOptions 에 설정 가능한 항목들을 설명한다.
   */
  export interface RectangleOptions {
    /**
     * 드래그 가능한 사각형
     */
    draggable: boolean;
    /**
     * 삭제 가능한 사각형 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다)
     */
    removable: boolean;
    /**
     * 수정 가능한 사각형 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다)
     */
    editable: boolean;
    /**
     * 외각선의 두께 (기본값: 3)
     */
    strokeWeight?: number;
    /**
     * #xxxxxx 형태의 외곽선 색 (기본값: ‘#F10000’)
     */
    strokeColor?: string;
    /**
     * 외곽선의 불투명도 (0-1, 기본값: 1.0)
     */
    strokeOpacity?: number;
    /**
     * 외곽선선 스타일 (기본값: ‘solid’)
     */
    strokeStyle?: kakao.maps.StrokeStyles;
    /**
     * #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’)
     */
    fillColor?: string;
    /**
     * 채우기 불토명도 (0-1, 기본값: 0)
     */
    fillOpacity?: number;
  }

  /**
   * DrawingManager 의 생성자 옵션에서 마커의 그리기 옵션인 circleOptions 에 설정 가능한 항목들을 설명한다.
   */
  export interface CircleOptions {
    /**
     * 드래그 가능한 원
     */
    draggable: boolean;
    /**
     * 삭제 가능한 원 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다)
     */
    removable: boolean;
    /**
     * 수정 가능한 원 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다)
     */
    editable: boolean;
    /**
     * 외각선의 두께 (기본값: 3)
     */
    strokeWeight?: number;
    /**
     * #xxxxxx 형태의 외곽선 색 (기본값: ‘#F10000’)
     */
    strokeColor?: string;
    /**
     * 외곽선의 불투명도 (0-1, 기본값: 1.0)
     */
    strokeOpacity?: number;
    /**
     * 외곽선 스타일 (기본값: ‘solid’)
     */
    strokeStyle?: kakao.maps.StrokeStyles;
    /**
     * #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’)
     */
    fillColor?: string;
    /**
     * 채우기 불토명도 (0-1, 기본값: 0)
     */
    fillOpacity?: number;
  }

  /**
   * DrawingManager 의 생성자 옵션에서 마커의 그리기 옵션인 ellipseOptions 에 설정 가능한 항목들을 설명한다.
   */
  export interface EllipseOptions {
    /**
     * 드래그 가능한 타원
     */
    draggable: boolean;
    /**
     * 삭제 가능한 타원 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다)
     */
    removable: boolean;
    /**
     * 수정 가능한 타원 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다)
     */
    editable: boolean;
    /**
     * 외각선의 두께 (기본값: 3)
     */
    strokeWeight?: number;
    /**
     * #xxxxxx 형태의 외곽선 색 (기본값: ‘#F10000’)
     */
    strokeColor?: string;
    /**
     * 외곽선의 불투명도 (0-1, 기본값: 1.0)
     */
    strokeOpacity?: number;
    /**
     * 외곽선 스타일 (기본값: ‘solid’)
     */
    strokeStyle?: kakao.maps.StrokeStyles;
    /**
     * #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’)
     */
    fillColor?: string;
    /**
     * 채우기 불토명도 (0-1, 기본값: 0)
     */
    fillOpacity?: number;
  }

  /**
   * DrawingManager 의 생성자 옵션에서 마커의 그리기 옵션인 polylineOptions 에 설정 가능한 항목들을 설명한다.
   */
  export interface PolylineOptions {
    /**
     * 드래그 가능한 선
     */
    draggable: boolean;
    /**
     * 삭제 가능한 선 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다)
     */
    removable: boolean;
    /**
     * 수정 가능한 선 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다)
     */
    editable: boolean;
    /**
     * 선의 두께 (기본값: 3)
     */
    strokeWeight?: number;
    /**
     * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
     */
    strokeColor?: string;
    /**
     * 선의 불투명도 (0-1, 기본값: 1.0)
     */
    strokeOpacity?: number;
    /**
     * 선 스타일 (기본값: ‘solid’)
     */
    strokeStyle?: kakao.maps.StrokeStyles;
    /**
     * 그리기 중, 마우스를 따라다니는 보조선의 스타일 (기본값: ‘solid’)
     */
    hintStrokeStyle?: kakao.maps.StrokeStyles;
    /**
     * 그리기 중, 마우스를 따라다니는 보조선의 투명도. (기본값: 0.5)
     */
    hintStrokeOpacity?: number;
  }

  /**
   * DrawingManager 의 생성자 옵션에서 마커의 그리기 옵션인 arrowOptions 에 설정 가능한 항목들을 설명한다.
   */
  export interface ArrowOptions {
    /**
     * 드래그 가능한 화살표 선
     */
    draggable: boolean;
    /**
     * 삭제 가능한 화살표 선 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다)
     */
    removable: boolean;
    /**
     * 수정 가능한 화살표 선 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다)
     */
    editable: boolean;
    /**
     * 화살표 선의 두께 (기본값: 3)
     */
    strokeWeight?: number;
    /**
     * #xxxxxx 형태의 화살표 선 색 (기본값: ‘#F10000’)
     */
    strokeColor?: string;
    /**
     * 화살표 선의 불투명도 (0-1, 기본값: 1.0)
     */
    strokeOpacity?: number;
    /**
     * 화살표 선 스타일 (기본값: ‘solid’)
     */
    strokeStyle?: kakao.maps.StrokeStyles;
    /**
     * 그리기 중, 마우스를 따라다니는 보조선의 스타일 (기본값: ‘solid’)
     */
    hintStrokeStyle?: kakao.maps.StrokeStyles;
    /**
     * 그리기 중, 마우스를 따라다니는 보조선의 투명도. (기본값: 0.5)
     */
    hintStrokeOpacity?: number;
    /**
     * 시작점의 화살표 표시 여부 (기본값: false)
     */
    startArrow?: boolean;
    /**
     * 끝점의 화살표 표시 여부 (기본값: false)
     */
    endArrow?: boolean;
  }

  /**
   * DrawingManager 의 생성자 옵션에서 마커의 그리기 옵션인 polygonOptions 에 설정 가능한 항목들을 설명한다.
   */
  export interface PolygonOptions {
    /**
     * 드래그 가능한 다각형
     */
    draggable: boolean;
    /**
     * 삭제 가능한 다각형 (true로 설정하면 마우스 오버 시 삭제할 수 있는 X 버튼이 표시된다)
     */
    removable: boolean;
    /**
     * 수정 가능한 다각형 (true로 설정하면 마우스 오버 시 수정할 수 있는 작은 사각형이 표시된다)
     */
    editable: boolean;
    /**
     * 외각선의 두께 (기본값: 3)
     */
    strokeWeight?: number;
    /**
     * #xxxxxx 형태의 외곽선 색 (기본값: ‘#F10000’)
     */
    strokeColor?: string;
    /**
     * 외곽선의 불투명도 (0-1, 기본값: 1.0)
     */
    strokeOpacity?: number;
    /**
     * 외곽선 스타일 (기본값: ‘solid’)
     */
    strokeStyle?: kakao.maps.StrokeStyles;
    /**
     * #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’)
     */
    fillColor?: string;
    /**
     * 채우기 불토명도 (0-1, 기본값: 0)
     */
    fillOpacity?: number;
    /**
     * 그리기 중, 마우스를 따라다니는 보조선의 스타일 (기본값: ‘solid’)
     */
    hintStrokeStyle?: kakao.maps.StrokeStyles;
    /**
     * 그리기 중, 마우스를 따라다니는 보조선의 투명도. (기본값: 0.5)
     */
    hintStrokeOpacity?: number;
  }

  /**
   * DrawingManager의 getData() 함수에서 데이터 중 marker 객체에 해당하는 타입
   */
  export interface DrawingMarkerData {
    /**
     * Drawing Data Type
     */
    type: "marker";
    /**
     * Maker의 content 값
     */
    content: string;
    /**
     * 좌표계 타입 (example: "wgs84")
     */
    coordinate:
      | kakao.maps.services.Coords
      | Lowercase<`${kakao.maps.services.Coords}`>;
    /**
     * marker 객체의 ImageOptions
     */
    icon?: MarkerImageOptions;
    /**
     * 죄표계의 x 좌표값
     */
    x: number;
    /**
     * 죄표계의 y 좌표값
     */
    y: number;
    /**
     * zIndex 값
     */
    zIndex: 0;
  }

  /**
   * DrawingManager의 getData() 함수에서 데이터 중 arrow 객체에 해당하는 타입
   */
  export interface DrawingArrowData {
    /**
     * Drawing Data Type
     */
    type: "arrow";
    /**
     * 좌표계 타입 (example: "wgs84")
     */
    coordinate:
      | kakao.maps.services.Coords
      | Lowercase<`${kakao.maps.services.Coords}`>;
    options: {
      /**
       * 끝점의 화살표 표시 여부 (기본값: false)
       */
      endArrow: boolean;
      /**
       * 시작점의 화살표 표시 여부 (기본값: false)
       */
      startArrow: boolean;
      /**
       * 화살표 선의 두께 (기본값: 3)
       */
      strokeWeight: number;
      /**
       * #xxxxxx 형태의 화살표 선 색 (기본값: ‘#F10000’)
       */
      strokeColor: string;
      /**
       * 화살표 선의 불투명도 (0-1, 기본값: 1.0)
       */
      strokeOpacity: number;
      /**
       * 화살표 선 스타일 (기본값: ‘solid’)
       */
      strokeStyle: kakao.maps.StrokeStyles;
    };
    points: Array<{
      /**
       * 죄표계의 x 좌표값
       */
      x: number;
      /**
       * 죄표계의 y 좌표값
       */
      y: number;
    }>;
  }

  /**
   * DrawingManager의 getData() 함수에서 데이터 중 polyline 객체에 해당하는 타입
   */
  export interface DrawingPolylineData {
    /**
     * Drawing Data Type
     */
    type: "polyline";
    /**
     * 좌표계 타입 (example: "wgs84")
     */
    coordinate:
      | kakao.maps.services.Coords
      | Lowercase<`${kakao.maps.services.Coords}`>;
    options: {
      /**
       * 선의 두께 (기본값: 3)
       */
      strokeWeight: number;
      /**
       * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
       */
      strokeColor: string;
      /**
       * 선의 불투명도 (0-1, 기본값: 1.0)
       */
      strokeOpacity: number;
      /**
       * 선 스타일 (기본값: ‘solid’)
       */
      strokeStyle: kakao.maps.StrokeStyles;
    };
    points: Array<{
      /**
       * 죄표계의 x 좌표값
       */
      x: number;
      /**
       * 죄표계의 y 좌표값
       */
      y: number;
    }>;
  }

  /**
   * DrawingManager의 getData() 함수에서 데이터 중 rectangle 객체에 해당하는 타입
   */
  export interface DrawingRectangleData {
    /**
     * Drawing Data Type
     */
    type: "rectangle";
    /**
     * 좌표계 타입 (example: "wgs84")
     */
    coordinate:
      | kakao.maps.services.Coords
      | Lowercase<`${kakao.maps.services.Coords}`>;
    options: {
      /**
       * 선의 두께 (기본값: 3)
       */
      strokeWeight: number;
      /**
       * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
       */
      strokeColor: string;
      /**
       * 선의 불투명도 (0-1, 기본값: 1.0)
       */
      strokeOpacity: number;
      /**
       * 선 스타일 (기본값: ‘solid’)
       */
      strokeStyle: kakao.maps.StrokeStyles;
      /**
       * #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’)
       */
      fillColor?: string;
      /**
       * 채우기 불토명도 (0-1, 기본값: 0)
       */
      fillOpacity?: number;
    };
    /**
     * rectangle의 시작 좌표값
     */
    sPoint: {
      /**
       * 죄표계의 x 좌표값
       */
      x: number;
      /**
       * 죄표계의 y 좌표값
       */
      y: number;
    };
    /**
     * rectangle의 끝 좌표값
     */
    ePoint: {
      /**
       * 죄표계의 x 좌표값
       */
      x: number;
      /**
       * 죄표계의 y 좌표값
       */
      y: number;
    };
  }

  /**
   * DrawingManager의 getData() 함수에서 데이터 중 circle 객체에 해당하는 타입
   */
  export interface DrawingCircleData {
    /**
     * Drawing Data Type
     */
    type: "circle";
    /**
     * 좌표계 타입 (example: "wgs84")
     */
    coordinate:
      | kakao.maps.services.Coords
      | Lowercase<`${kakao.maps.services.Coords}`>;
    options: {
      /**
       * 선의 두께 (기본값: 3)
       */
      strokeWeight: number;
      /**
       * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
       */
      strokeColor: string;
      /**
       * 선의 불투명도 (0-1, 기본값: 1.0)
       */
      strokeOpacity: number;
      /**
       * 선 스타일 (기본값: ‘solid’)
       */
      strokeStyle: kakao.maps.StrokeStyles;
      /**
       * #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’)
       */
      fillColor?: string;
      /**
       * 채우기 불토명도 (0-1, 기본값: 0)
       */
      fillOpacity?: number;
    };
    /**
     * circle 시작 좌표값
     */
    sPoint: {
      /**
       * 죄표계의 x 좌표값
       */
      x: number;
      /**
       * 죄표계의 y 좌표값
       */
      y: number;
    };
    /**
     * circle 끝 좌표값
     */
    ePoint: {
      /**
       * 죄표계의 x 좌표값
       */
      x: number;
      /**
       * 죄표계의 y 좌표값
       */
      y: number;
    };
    /**
     * circle 중심 좌표값
     */
    center: {
      /**
       * 죄표계의 x 좌표값
       */
      x: number;
      /**
       * 죄표계의 y 좌표값
       */
      y: number;
    };
    /**
     * 반지름 크기
     */
    radius: number;
  }

  /**
   * DrawingManager의 getData() 함수에서 데이터 중 ellipse 객체에 해당하는 타입
   */
  export interface DrawingEllipseData {
    /**
     * Drawing Data Type
     */
    type: "ellipse";
    /**
     * 좌표계 타입 (example: "wgs84")
     */
    coordinate:
      | kakao.maps.services.Coords
      | Lowercase<`${kakao.maps.services.Coords}`>;
    options: {
      /**
       * 선의 두께 (기본값: 3)
       */
      strokeWeight: number;
      /**
       * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
       */
      strokeColor: string;
      /**
       * 선의 불투명도 (0-1, 기본값: 1.0)
       */
      strokeOpacity: number;
      /**
       * 선 스타일 (기본값: ‘solid’)
       */
      strokeStyle: kakao.maps.StrokeStyles;
      /**
       * #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’)
       */
      fillColor?: string;
      /**
       * 채우기 불토명도 (0-1, 기본값: 0)
       */
      fillOpacity?: number;
    };
    /**
     * ellipse 시작 좌표값
     */
    sPoint: {
      /**
       * 죄표계의 x 좌표값
       */
      x: number;
      /**
       * 죄표계의 y 좌표값
       */
      y: number;
    };
    /**
     * ellipse 끝 좌표값
     */
    ePoint: {
      /**
       * 죄표계의 x 좌표값
       */
      x: number;
      /**
       * 죄표계의 y 좌표값
       */
      y: number;
    };
    /**
     * ellipse 중심 좌표값
     */
    center: {
      /**
       * 죄표계의 x 좌표값
       */
      x: number;
      /**
       * 죄표계의 y 좌표값
       */
      y: number;
    };
    /**
     * 반지름 x 크기
     */
    rx: number;
    /**
     * 반지름 y 크기
     */
    ry: number;
  }

  /**
   * DrawingManager의 getData() 함수에서 데이터 중 polygon 객체에 해당하는 타입
   */
  export interface DrawingPolygonData {
    /**
     * Drawing Data Type
     */
    type: "polygon";
    /**
     * 좌표계 타입 (example: "wgs84")
     */
    coordinate:
      | kakao.maps.services.Coords
      | Lowercase<`${kakao.maps.services.Coords}`>;
    options: {
      /**
       * 선의 두께 (기본값: 3)
       */
      strokeWeight: number;
      /**
       * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
       */
      strokeColor: string;
      /**
       * 선의 불투명도 (0-1, 기본값: 1.0)
       */
      strokeOpacity: number;
      /**
       * 선 스타일 (기본값: ‘solid’)
       */
      strokeStyle: kakao.maps.StrokeStyles;
      /**
       * #xxxxxx 형태의 채우기 색 (기본값: ‘#F10000’)
       */
      fillColor?: string;
      /**
       * 채우기 불토명도 (0-1, 기본값: 0)
       */
      fillOpacity?: number;
    };
    points: Array<{
      /**
       * 죄표계의 x 좌표값
       */
      x: number;
      /**
       * 죄표계의 y 좌표값
       */
      y: number;
    }>;
  }
}
