/// <reference path="index.d.ts" />
declare namespace kakao.maps {
  /**
   * @see [Pagination](http://apis.map.kakao.com/web/documentation/#Pagination)
   */
  export class Pagination {
    /**
     * 다음 페이지를 검색한다.
     */
    public nextPage(): void;

    /**
     * 이전 페이지를 검색한다.
     */
    public prevPage(): void;

    /**
     * 저장한 페이지를 검색한다.
     *
     * @param page 페이지 번호
     */
    public gotoPage(page: number): void;

    /**
     * 가장 처음 페이지를 검색한다.
     */
    public gotoFirst(): void;

    /**
     * 가장 마지막 페이지를 검색한다.
     */
    public gotoLast(): void;

    /**
     * 현재 검색의 결과 목록의 총 갯수
     */
    totalCount: number;

    /**
     * 현재 검색 결과 기준, 다음 페이지가 있는지 여부
     */
    hasNextPage: boolean;

    /**
     * 현재 검색 결과 기준, 이 전 페이지가 있는지 여부
     */
    hasPrevPage: boolean;

    /**
     * 현재 페이지 번호
     */
    current: number;

    /**
     * 첫번째 페이지 번호
     * @experimental
     */
    first: number;

    /**
     * 마지막 페이지 번호
     * @experimental
     */
    last: number;
  }
}
