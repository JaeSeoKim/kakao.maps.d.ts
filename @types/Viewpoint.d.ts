/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [Viewpoint](https://apis.map.kakao.com/web/documentation/#Viewpoint)
   */
  export class Viewpoint {
    pan: number;
    tilt: number;
    zoom?: number;
    panoId?: number;

    /**
     * 로드뷰를 생성한다.
     * @param pan 가로 각도, 0부터 360 사이의 값으로 북쪽부터 시계방향으로 대응한다.
     * @param tilt 세로 각도, -90부터 90 사이의 값으로 위쪽부터 아래쪽으로 대응한다.
     * @param zoom 확대 수준, -3부터 3 사이의 정수이다.
     * @param panoId 특정 위치의 로드뷰 고유의 아이디 값
     */
    constructor(pan: number, tilt: number, zoom?: number, panoId?: number);
  }
}
