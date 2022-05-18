/// <reference path="index.d.ts" />

/**
 * 장소 검색 및 주소-좌표 간 변환 서비스를 포함하고 있다.
 */
declare namespace kakao.maps.services {
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
}
