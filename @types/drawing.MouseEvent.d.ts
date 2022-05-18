/// <reference path="index.d.ts" />

declare namespace kakao.maps.drawing {
  interface ExtendsOverlay {}

  export interface MouseEvent {
    overlayType: OverlayType;
    coords: Coords;
    point: Point;
    target: ExtendsOverlay;
  }
}
