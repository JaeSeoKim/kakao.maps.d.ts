/// <reference path="index.d.ts" />

/**
 * 지도 객체의 이벤트 관련 함수를 담은 네임스페이스
 */
declare namespace kakao.maps {
  export enum CategoryCode {
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
