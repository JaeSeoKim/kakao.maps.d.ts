/// <reference path="index.d.ts" />

declare namespace kakao.maps {
  /**
   * @see [StaticMap](https://apis.map.kakao.com/web/documentation/#StaticMap)
   */
  export class StaticMap {
    /**
     * 이미지 지도를 생성한다.
     * 이미지 지도의 최대 크기는 2048×2048이고 이 이상 큰 이미지를 요청하는 경우 무시된다.
     *
     * @param container 이미지 지도가 표시될 HTML element
     * @param options
     */
    constructor(container: Node, options: StaticMapOptions);

    /**
     * 이미지 지도의 중심 좌표를 설정한다.
     * @param latlng
     */
    public setCenter(latlng: LatLng): void;

    /**
     * 이미지 지도의 중심 좌표를 반환한다.
     */
    public getCenter(): LatLng;

    /**
     * 이미지 지도의 확대 수준을 설정한다.
     * 0부터 14까지의 정수이며, 값이 작을수록 확대된다.
     * @param level
     */
    public setLevel(level: number): void;

    /**
     * 이미지 지도의 확대 수준을 반환한다.
     * 0부터 14까지의 정수이며, 지도가 확대되어 있을수록 작은 값을 반환한다.
     */
    public getLevel(): number;

    /**
     * 이미지 지도 타입을 설정한다.
     * @param mapTypeId
     */
    public setMapTypeId(mapTypeId: MapTypeId): void;

    /**
     * 이미지 지도 타입을 반환한다.
     */
    public getMapTypeId(): MapTypeId;
  }

  export interface StaticMapOptions {
    /**
     * 중심 좌표 (필수)
     */
    center: LatLng;
    /**
     * 확대 수준
     * @default 3
     */
    level?: number;
    /**
     * 지도 종류 (기본값: 일반 지도)
     */
    mapTypeId?: MapTypeId;
    /**
     * 이미지 지도에 표시할 마커 또는 마커 배열
     */
    marker:
    | boolean
    | {
      /**
       * 마커 tooltip에 표시될 내용
       */
      text?: string;
      /**
       * 마커 포지션
       */
      position?: LatLng;
    }
    | Array<{
      /**
       * 마커 tooltip에 표시될 내용
       */
      text?: string;
      /**
       * 마커 포지션
       */
      position: LatLng;
    }>;
  }
}
