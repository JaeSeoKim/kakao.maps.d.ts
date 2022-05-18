/// <reference path="index.d.ts" />

declare namespace kakao.maps.services {
  /**
   * 주소-좌표간 변환 서비스 객체를 생성한다.
   *
   * @see [Geocorder](http://apis.map.kakao.com/web/documentation/#services_Geocoder)
   */
  export class Geocoder {
    /**
     * 주소 정보에 해당하는 좌표값을 요청한다.
     *
     * @param addr 변환할 주소명
     * @param callback 검색 결과를 받을 콜백함수
     * @param options
     */
    public addressSearch(
      addr: string,
      callback: (
        /**
         * 결과 목록
         *
         * @see [로컬 REST API 키워드로 장소 검색](https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord)
         */
        result: Array<{
          /**
           * 전체 지번 주소 또는 전체 도로명 주소, 입력에 따라 결정됨
           */
          address_name: string;
          /**
           * address_name의 값의 타입(Type)
           * 다음 중 하나:
           * REGION(지명)
           * ROAD(도로명)
           * REGION_ADDR(지번 주소)
           * ROAD_ADDR(도로명 주소)
           */
          address_type: "REGION" | "ROAD" | "REGION_ADDR" | "ROAD_ADDR";
          /**
           * X 좌표값, 경위도인 경우 경도(longitude)
           */
          x: string;
          /**
           * Y 좌표값, 경위도인 경우 위도(latitude)
           */
          y: string;
          /**
           * 지번 주소 상세 정보
           */
          address: Address;
          /**
           * 도로명 주소 상세 정보
           */
          road_address: RoadAaddress;
        }>,
        /**
         * 응답 코드
         */
        status: Status,
        /**
         * Pagination 객체
         */
        pagination: Pagination
      ) => void,
      option?: {
        /**
         * 검색할 페이지. 기본값은 1
         */
        page: number;
        /**
         * 검색할 페이지. 기본값은 10, 1~30 까지 가능
         */
        size: number;
        /**
         * 검색어 매칭 방식 선택 옵션. SIMILAR 일 경우 입력한 것과 유사한 검색어도 검색결과에 포함시킨다. EXACT 일 경우 입력한 주소 문자열과 정확하게 매칭되는 주소만을 찾아준다. 기본값은 SIMILAR
         */
        analyze_type: AnalyzeType;
      }
    ): void;

    /**
     * 좌표 값에 해당하는 구 주소와 도로명 주소 정보를 요청한다.
     * 도로명 주소는 좌표에 따라서 표출되지 않을 수 있다.
     *
     * @param x x 좌표, 경위도인 경우 longitude
     * @param y y 좌표, 경위도인 경우 latitude
     * @param callback 검색 결과를 받을 콜백함수
     * @param options
     */
    public coord2Address(
      x: number,
      y: number,
      callback: (
        /**
         * 결과 목록
         */
        result: Array<{
          /**
           * 지번 주소 상세 정보
           */
          address: Address;
          /**
           * 도로명 주소 상세 정보
           */
          road_address: RoadAaddress | null;
        }>,
        /**
         * 응답 코드
         */
        status: Status
      ) => void,
      options?: {
        /**
         * 입력 좌표 체계. 기본값은 WGS84
         */
        input_coord: Coords;
      }
    ): void;

    /**
     * 좌표 값에 해당하는 행정동, 법정동 정보를 얻는다.
     *
     * @param x x 좌표, 경위도인 경우 longitude
     * @param y y 좌표, 경위도인 경우 latitude
     * @param callback 검색 결과를 받을 콜백함수
     * @param options
     */
    public coord2RegionCode(
      x: number,
      y: number,
      callback: (result: Array<RegionCode>, status: Status) => void,
      options?: {
        /**
         * 입력 좌표 체계. 기본값은 WGS84
         */
        input_coord: Coords;
        /**
         * 출력 좌표 체계. 기본값은 WGS84
         */
        output_coord: Coords;
      }
    ): void;

    /**
     * 입력한 좌표를 다른 좌표계의 좌표로 변환한다.
     *
     * @param x 변환할 x 좌표
     * @param y 변환할 y 좌표
     * @param callback 변환 결과를 받을 콜백함수
     * @param options
     */
    public transCoord(
      x: number,
      y: number,
      callback: (
        /**
         * 변환된 좌표 결과
         */
        result: Array<{
          x: number;
          y: number;
        }>,
        /**
         * 응답 코드
         */
        status: Status
      ) => void,
      options?: {
        /**
         * 입력 좌표 체계. 기본값은 WGS84
         */
        input_coord?: Coords;

        /**
         * 출력 좌표 체계. 기본값은 WGS84
         */
        output_coord?: Coords;
      }
    ): void;
  }

  /**
   * 지번 주소 상세 정보
   *
   * @see https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord-documents-address
   */
  export type Address = {
    /**
     * 전체 지번 주소
     */
    address_name: string;
    /**
     *  지역 1 Depth, 시도 단위
     */
    region_1depth_name: string;
    /**
     *  지역 2 Depth, 구 단위
     */
    region_2depth_name: string;
    /**
     *  지역 3 Depth, 동 단위
     */
    region_3depth_name: string;
    /**
     *  지역 3 Depth, 행정동 명칭
     */
    region_3depth_h_name: string;
    /**
     *  행정 코드
     */
    h_code: string;
    /**
     *  법정 코드
     */
    b_code: string;
    /**
     *  산 여부, Y 또는 N
     */
    mountain_yn: string;
    /**
     *  지번 주번지
     */
    main_address_no: string;
    /**
     *  지번 부번지, 없을 경우 빈 문자열("") 반환
     */
    sub_address_no: string;
    /**
     * @deprecated 우편번호(6자리)
     *
     * @see [주소 검색 API의 우편번호 및 오탈자 응답 필드 제거 안내] https://devtalk.kakao.com/t/api-6/93000
     */
    zip_code: string;
    /**
     * X 좌표값, 경위도인 경우 경도(longitude)
     */
    x: string;
    /**
     * Y 좌표값, 경위도인 경우 위도(latitude)
     */
    y: string;
  };

  export type RegionCode = {
    /**
     * H(행정동) 또는 B(법정동)
     */
    region_type: string;
    /**
     * 전체 지역 명칭
     */
    address_name: string;
    /**
     * 지역 1Depth, 시도 단위 바다 영역은 존재하지 않음
     */
    region_1depth_name: string;
    /**
     * 지역 2Depth, 구 단위 바다 영역은 존재하지 않음
     */
    region_2depth_name: string;
    /**
     * 지역 3Depth, 동 단위 바다 영역은 존재하지 않음
     */
    region_3depth_name: string;
    /**
     * 지역 4Depth, 리 영역인 경우만 존재 region_type이 법정동이며;
     */
    region_4depth_name: string;
    /**
     * region 코드
     */
    code: string;
    /**
     * X 좌표값, 경위도인 경우 경도(longitude)
     */
    x: number;
    /**
     * Y 좌표값, 경위도인 경우 위도(latitude)
     */
    y: number;
  };

  /**
   * 도로명 주소 상세 정보
   *
   * @see https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord-documents-road-address
   */
  export type RoadAaddress = {
    /**
     * 전체 도로명 주소
     */
    address_name: string;
    /**
     * 지역명1
     */
    region_1depth_name: string;
    /**
     * 지역명2
     */
    region_2depth_name: string;
    /**
     * 지역명3
     */
    region_3depth_name: string;
    /**
     * 도로명
     */
    road_name: string;
    /**
     * 지하 여부, Y 또는 N
     */
    underground_yn: "Y" | "N";
    /**
     * 건물 본번
     */
    main_building_no: string;
    /**
     * 건물 부번, 없을 경우 빈 문자열("") 반환
     */
    sub_building_no: string;
    /**
     * 건물 이름
     */
    building_name: string;
    /**
     * 우편번호(5자리)
     */
    zone_no: string;
    /**
     * X 좌표값, 경위도인 경우 경도(longitude)
     */
    x: string;
    /**
     * Y 좌표값, 경위도인 경우 위도(latitude)
     */
    y: string;
  };
}
