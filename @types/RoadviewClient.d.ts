/// <reference path="index.d.ts" />

declare namespace kakao.maps {
  /**
   * @see [RoadviewClient](https://apis.map.kakao.com/web/documentation/#RoadviewClient)
   */
  export class RoadviewClient {
    /**
     * 특정 좌표 근처의 파노라마 ID 등 로드뷰와 관련된 데이터를 다룬다.
     */
    constructor();

    /**
     * 특정 좌표에서 반경 내 가장 가까운 로드뷰 파노라마 ID를 구한다.
     * @param position
     * @param radius
     * @param callback
     */
    getNearestPanoId(
      position: LatLng,
      radius: number,
      callback: (panoId: number) => void
    ): number;
  }
}
