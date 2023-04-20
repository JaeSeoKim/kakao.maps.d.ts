/// <reference path="index.d.ts" />

declare namespace kakao.maps {
  /**
   * 클러스터 객체.
   * 클러스터링 된 마커들과 클러스터 오버레이의 정보를 가지고 있다.
   * 직접 선언은 불가능하며 MarkerClusterer 의 이벤트 핸들러의 인자로 인스턴스가 생성되어 넘어온다.
   */
  export interface Cluster {
    /**
     * 클러스터의 좌표를 반환한다.
     */
    getCenter(): LatLng;

    /**
     * 클러스터의 영역을 반환한다.
     */
    getBounds(): LatLngBounds;

    /**
     * 클러스터에 포함된 마커의 개수를 반환한다.
     */
    getSize(): number;

    /**
     * 클러스터에 포함된 마커, 또는 커스텀 오버레이들을 배열로 반환한다.
     */
    getMarkers(): Marker[] | CustomOverlay[];

    /**
     * 클러스터 오버레이를 반환한다.
     * 리턴값은 CustomOverlay 이다.
     */
    getClusterMarker(): CustomOverlay;
  }
}
