/// <reference path="index.d.ts" />

/**
 * 장소 검색 및 주소-좌표 간 변환 서비스를 포함하고 있다.
 */
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
          meta: {
            /**
             * 매칭된 문서수
             */
            total_count: number;
          };
          documents: Array<{
            x: number;
            y: number;
          }>;
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

  /**
   * 좌표 변환을 지원하는 좌표계가 상수로 정의되어 있다.
   * 좌표 변환( transCoord )에서 변환을 위해,
   * 좌표→주소 변환( coord2RegionCode, coord2Address )에서 입력한 좌표의 좌표계를 지정하거나
   * 또는 받을 출력 좌표계를 지정하기 위해 사용한다.
   */
  export enum Coords {
    WGS84 = "WGS84",
    WCONGNAMUL = "WCONGNAMUL",
    CONGNAMUL = "CONGNAMUL",
    WTM = "WTM",
    TM = "TM",
  }

  /**
   * 주소-좌표 검색( addressSearch )에서 검색 방식을 지정하기 위해 사용한다.
   */
  export enum AnalyzeType {
    /**
     * 건물명이 일부 매칭될 경우에도 검색 결과를 사용
     */
    SIMILAR = "SIMILAR",
    /**
     * 정확한 주소 패턴일 경우에만 검색 결과를 사용
     */
    EXACT = "EXACT",
  }

  /**
   * 정렬을 위한 옵션 값이 상수로 정의되어 있다.
   * 장소 검색( keywordSearch, categorySearch )에서 결과의 정렬을 위해 사용한다.
   * 이 중, DISTANCE 을 사용하기 위해서는 또 다른 옵션 중 하나인 location 이 함께 지정되어 있어야 한다.
   */
  export enum SortBy {
    /**
     * 정확도 순
     */
    ACCURACY = "accuracy",

    /**
     * 거리 순
     */
    DISTANCE = "distance",
  }

  /**
   * 응답 코드가 상수로 정의되어 있다.
   */
  export enum Status {
    /**
     * 서버 응답에 문제가 있는 경우
     */
    ERROR = "ERROR",

    /**
     * 검색 결과 있음
     */
    OK = "OK",

    /**
     * 정상적으로 응답 받았으나 검색 결과는 없음
     */
    ZERO_RESULT = "ZERO_RESULT",
  }

  /**
   * 장소 검색 서비스.
   *
   * @see [Places](http://apis.map.kakao.com/web/documentation/#services_Places)
   */
  export class Places {
    /**
     * 장소 검색 서비스 객체를 생성한다.
     *
     * @param map 중심 좌표를 Places 객체의 location으로 설정할 지도 객체
     */
    constructor(map?: Map);

    /**
     * 지도 객체를 설정한다. 이미 설정되어 있는 지도는 `setMap(null)` 로 해제 가능하다.
     *
     * @param map 지도 객체
     */
    public setMap(map: Map | null): void;

    /**
     * 입력한 키워드로 검색한다.
     *
     * @param keyword 검색할 키워드
     * @param callback 검색 결과를 받을 콜백함수
     * @param options
     */
    public keywordSearch(
      keyword: string,
      callback: (
        result: PlacesSearchResult,
        status: Status,
        pagination: Pagination
      ) => void,
      options?: PlacesSearchOptions
    ): void;

    /**
     * 주어진 카테고리 코드로 검색한다.
     * 카테고리 검색은 영역 검색이 기본이므로
     * 옵션에 명세된 `x`, `y` 또는 `rect` 를 직접 지정하거나,
     * `location` 또는 `bounds` 값을 넣어 주어야 한다.
     * 아니면 지정한 `Map` 객체를 이용하는 옵션인 `useMapCenter` 또는
     * `useMapBounds` 을 참으로 설정하여 지도의 영역이 자동으로
     * 관련 값에 할당되도록 해도 된다.
     *
     * @param code 검색할 카테고리 코드
     * @param callback 검색 결과를 받을 콜백함수
     * @param options
     */
    public categorySearch(
      code: CategoryGroupCode,
      callback: (
        result: PlacesSearchResult,
        status: Status,
        pagination: Pagination
      ) => void,
      options?: PlacesSearchOptions
    ): void;
  }

  export type PlacesSearchResult = PlacesSearchResultItem[];

  export interface PlacesSearchResultItem {
    /**
     * 장소 ID
     */
    id: string;

    /**
     * 장소명, 업체명
     */
    place_name: string;

    /**
     * 카테고리 이름
     * 예) 음식점 > 치킨
     */
    category_name: string;

    /**
     * 중요 카테고리만 그룹핑한 카테고리 그룹 코드
     * 예) FD6
     */
    category_group_code: CategoryGroupCode;

    /**
     * 중요 카테고리만 그룹핑한 카테고리 그룹명
     * 예) 음식점
     */
    category_group_name: string;

    /**
     * 전화번호
     */
    phone: string;

    /**
     * 전체 지번 주소
     */
    address_name: string;

    /**
     * 전체 도로명 주소
     */
    road_address_name: string;

    /**
     * X 좌표값 혹은 longitude
     */
    x: string;

    /**
     * Y 좌표값 혹은 latitude
     */
    y: string;

    /**
     * 장소 상세페이지 URL
     */
    place_url: string;

    /**
     * 중심좌표까지의 거리(x,y 파라미터를 준 경우에만 존재). 단위 meter
     */
    distance: string;
  }

  export interface PlacesSearchOptions {
    /**
     * 키워드 필터링을 위한 카테고리 코드
     */
    category_group_code?: CategoryGroupCode;

    /**
     * 중심 좌표. 특정 지역을 기준으로 검색한다.
     */
    location?: LatLng;

    /**
     * x 좌표, longitude, `location` 값이 있으면 무시된다.
     */
    x?: number;

    /**
     * y 좌표, latitude, `location` 값이 있으면 무시된다.
     */
    y?: number;

    /**
     * 중심 좌표로부터의 거리(반경) 필터링 값. `location` / `x`, `y` / `useMapCenter` 중 하나와 같이 써야 의미가 있음. 미터(m) 단위. 기본값은 5000, 0~20000까지 가능
     */
    radius?: number;

    /**
     * 검색할 사각형 영역
     */
    bounds?: LatLngBounds;

    /**
     * 사각 영역. 좌x,좌y,우x,우y 형태를 가짐. `bounds` 값이 있으면 무시된다.
     */
    rect?: string;

    /**
     * 한 페이지에 보여질 목록 개수. 기본값은 15, 1~15까지 가능
     */
    size?: number;

    /**
     * 검색할 페이지. 기본값은 1, `size` 값에 따라 1~45까지 가능
     */
    page?: number;

    /**
     * 정렬 옵션. `DISTANCE` 일 경우 지정한 좌표값에 기반하여 동작함. 기본값은 `ACCURACY` (정확도 순)
     */
    sort?: SortBy;

    /**
     * 지정한 Map 객체의 중심 좌표를 사용할지의 여부. 참일 경우, `location` 속성은 무시된다. 기본값은 false
     */
    useMapCenter?: boolean;

    /**
     * 지정한 Map 객체의 영역을 사용할지의 여부. 참일 경우, `bounds` 속성은 무시된다. 기본값은 false
     */
    useMapBounds?: boolean;
  }

  export enum CategoryGroupCode {
    /**
     * 코드 미부여
     */
    BLANK = "",

    /**
     * 대형마트
     */
    MT1 = "MT1",

    /**
     * 편의점
     */
    CS2 = "CS2",

    /**
     * 어린이집, 유치원
     */
    PS3 = "PS3",

    /**
     * 학교
     */
    SC4 = "SC4",

    /**
     * 학원
     */
    AC5 = "AC5",

    /**
     * 주차장
     */
    PK6 = "PK6",

    /**
     * 주유소, 충전소
     */
    OL7 = "OL7",

    /**
     * 지하철역
     */
    SW8 = "SW8",

    /**
     * 은행
     */
    BK9 = "BK9",

    /**
     * 문화시설
     */
    CT1 = "CT1",

    /**
     * 중개업소
     */
    AG2 = "AG2",

    /**
     * 공공기관
     */
    PO3 = "PO3",

    /**
     * 관광명소
     */
    AT4 = "AT4",

    /**
     * 숙박
     */
    AD5 = "AD5",

    /**
     * 음식점
     */
    FD6 = "FD6",

    /**
     * 카페
     */
    CE7 = "CE7",

    /**
     * 병원
     */
    HP8 = "HP8",

    /**
     * 약국
     */
    PM9 = "PM9",
  }
}
