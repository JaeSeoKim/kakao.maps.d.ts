/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [MarkerClusterer](http://apis.map.kakao.com/web/documentation/#MarkerClusterer)
   */
  export class MarkerClusterer implements kakao.maps.event.EventTarget {
    /**
     * 마커 클러스터링을 담당하는 객체.
     * clusterer 라이브러리를 별도 로드 해야 사용 가능하다.
     *
     * @see [마커 클러스터러 사용하기 샘플보기](http://apis.map.kakao.com/web/sample/basicClusterer/)
     * @param options
     */
    constructor(options: MarkerClustererOptions);

    /**
     * 클러스터에 마커 하나를 추가한다.
     *
     * @param marker 추가할 마커
     * @param nodraw 클러스터 redraw 여부. true인 경우 클러스터를 다시 그리지 않는다.
     */
    addMarker(marker: Marker | CustomOverlay, nodraw?: boolean): void;

    /**
     * 클러스터에 추가된 마커 중 하나를 삭제한다.
     *
     * @param marker 삭제할 마커
     * @param nodraw 클러스터 redraw 여부. true인 경우 클러스터를 다시 그리지 않는다.
     */
    removeMarker(marker: Marker | CustomOverlay, nodraw?: boolean): void;

    /**
     * 여러개의 마커를 추가한다.
     *
     * @param markers 추가할 마커 객체 배열
     * @param nodraw 클러스터 redraw 여부. true인 경우 클러스터를 다시 그리지 않는다.
     */
    addMarkers(markers: (Marker | CustomOverlay)[], nodraw?: boolean): void;

    /**
     * 추가된 마커 중 여러개의 마커를 삭제한다.
     *
     * @param markers 삭제할 마커 객체 배열
     * @param nodraw 클러스터 redraw 여부. true인 경우 클러스터를 다시 그리지 않는다.
     */
    removeMarkers(markers: (Marker | CustomOverlay)[], nodraw?: boolean): void;

    /**
     * 추가된 모든 마커를 삭제한다.
     */
    clear(): void;

    /**
     * 클러스터를 다시 그린다. 주로 옵션을 변경한 이후 클러스터를 다시 그릴 때 사용한다.
     */
    redraw(): void;

    /**
     * 클러스터의 격자 크기를 반환한다.
     */
    getGridSize(): number;

    /**
     * 클러스터의 격자 크기를 설정한다. (단위 : 화면픽셀)
     *
     * @param size 격자 크기
     */
    setGridSize(size: number): void;

    /**
     * 클러스터를 만들기 위해 필요한 최소 마커 개수를 반환한다.
     */
    getMinClusterSize(): number;

    /**
     * 클러스터를 만들기 위해 필요한 최소 마커 개수를 설정한다.
     *
     * @param size 마커 개수
     */
    setMinClusterSize(size: number): void;

    /**
     * 현재 설정되어있는 클러스터 마커의 위치 결정 방식을 반환한다.
     * 반환 값이 true 일 경우 클러스터가 포함하는 마커들의 위치 평균값을 사용하고 있음을 의미하고
     * false 일 경우에는 기준이 되는 특정 마커의 위치를 사용하고 있음을 의미한다.
     */
    getAverageCenter(): boolean;

    /**
     * 현재 설정되어있는 클러스터 마커의 위치 결정 방식을 설정한다.
     * true 로 설정하면 클러스터가 포함하는 마커들의 위치 평균값을 사용하여 클러스터 마커의 위치를 결정하고
     * false 로 설정하면 기준이 되는 특정 마커의 위치를 클러스터 마커의 위치로 결정한다.
     *
     * @param bool
     */
    setAverageCenter(bool: boolean): void;

    /**
     * 클러스터링 할 지도의 최소 레벨 값을 반환한다.
     */
    getMinLevel(): number;

    /**
     * 클러스터링 할 지도의 최소 레벨 값을 설정한다.
     *
     * @param level 지도의 레벨
     */
    setMinLevel(level: number): void;

    /**
     * 클러스터 내부에 표시할 문자열의 배열 또는 문자열 생성 합수를 반환한다.
     */
    getTexts(): string[] | ((size: number) => string[]);

    /**
     * 클러스터 내부에 표시할 문자열 배열 또는 문자열 생성 함수를 설정한다.
     *
     * @see [클러스터 마커에 텍스트 표시하기 샘플보기](http://apis.map.kakao.com/web/sample/chickenClusterer)
     * @param texts 클러스터 내부에 표시할 문자열 배열 또는 문자열 생성 함수
     */
    setTexts(texts: string[] | ((size: number) => string)): void;

    /**
     * 클러스터 크기를 구분하는 값을 가진 배열 혹은 구분값 생성 함수를 반환한다.
     */
    getCalculator(): number[] | ((size: number) => number[]);

    /**
     * 클러스터 크기를 구분하는 값을 가진 배열 혹은 구분값 생성 함수를 설정한다.
     * 별도로 지정하지 않으면 기본값은 [10, 100, 1000, 10000] 이다.
     * 배열로 지정할 경우에는 반드시 오름차순으로 정렬해야 하며,
     * 생성함수로 지정할 경우에는 클러스터의 스타일 배열 인덱스 또는 텍스트(texts) 배열의 인덱스를 반환해야 한다.
     *
     * @see [클러스터 마커에 텍스트 표시하기 샘플보기](http://apis.map.kakao.com/web/sample/chickenClusterer)
     * @param calculator 클러스터의 크기를 구분하는 값의 배열 또는 구분값을 생성하는 함수
     */
    setCalculator(calculator: number[] | ((size: number) => number[])): void;

    /**
     * 클러스터 마커에 설정된 스타일 배열을 반환한다.
     */
    getStyles(): object[];

    /**
     * 클러스터 마커에 스타일을 설정한다.
     * 여러개를 선언하면 calculator 로 구분된 사이즈 구간마다 서로 다른 스타일을 적용시킬 수 있다.
     *
     * @param styles 클러스터 마커에 설정할 스타일 배열
     */
    setStyles(styles: object[]): void;

    /**
     * 지도에 마커 클러스터러를 올린다.
     * null 을 지정하면 마커 클러스터러를 제거한다.
     *
     * @param map
     */
    setMap(map: Map | null): void;

    /**
     * 마커 클러스터러가 올라가있는 지도를 반환한다.
     */
    getMap(): Map | null;
  }

  export interface MarkerClustererOptions {
    /**
     * 클러스터링 마커를 표시할 지도 객체
     */
    map?: Map;

    /**
     * 클러스터링 할 마커 배열
     */
    markers?: (Marker | CustomOverlay)[];

    /**
     * 클러스터의 격자 크기.
     * 화면 픽셀 단위이며 해당 격자 영역 안에 마커가 포함되면 클러스터에 포함시킨다 (default : 60)
     */
    gridSize?: number;

    /**
     * 마커들의 좌표 평균을 클러스터 좌표 설정 여부 (default : false)
     */
    averageCenter?: boolean;

    /**
     * 클러스터링 할 지도의 최소 레벨 값.
     * 지정한 숫자에 해당하는 레벨 미만에서는 클러스터링 하지 않는다 (default : 0)
     */
    minLevel?: number;

    /**
     * 클러스터링 할 최소 마커 수 (default: 2)
     */
    minClusterSize?: number;

    /**
     * 클러스터의 스타일.
     * 여러개를 선언하면 calculator 로 구분된 사이즈 구간마다 서로 다른 스타일을 적용시킬 수 있다
     */
    styles?: object[];

    /**
     * 클러스터에 표시할 문자열 또는 문자열 생성 함수.
     * @default "클러스터에 포함된 숫자"
     */

    texts?: string[] | ((size: number) => string);
    /**
     * 클러스터 크기를 구분하는 값을 가진 배열 또는 구분값 생성함수
     * @default [10, 100, 1000, 10000]
     */
    calculator?: number[] | ((size: number) => number[]);

    /**
     * 클러스터 클릭 시 지도 확대 여부.
     * true로 설정하면 클러스터 클릭 시 확대 되지 않는다 (default: false)
     */
    disableClickZoom?: boolean;

    /**
     * 클러스터 클릭 가능 여부 지정 옵션.
     * false일 경우 클러스터의 clusterclick, clusterdblclick, clusterrightclick 이벤트가 발생하지 않으며,
     * 커서가 변경되지 않는다. (default: true)
     */
    clickable?: boolean;

    /**
     * 클러스터에 마우스 over/out 가능 여부 지정 옵션.
     * false일 경우 클러스터의 clusterover, clusterout 이벤트가 발생하지 않는다.
     * (default: true)
     */
    hoverable?: boolean;
  }
}
