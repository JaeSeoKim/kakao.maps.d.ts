/// <reference path="index.d.ts" />

declare namespace kakao.maps.services {
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
      code: CategoryCode | `${CategoryCode}`,
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
    category_group_code?: `${CategoryCode}` | `${Exclude<CategoryCode, "">}`[];

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
    category_group_code?: `${CategoryCode}` | `${Exclude<CategoryCode, "">}`[];

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
}
