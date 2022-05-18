/// <reference path="index.d.ts" />

declare namespace kakao.maps.drawing {
  /**
   * @see [drawing.Toolbox](https://apis.map.kakao.com/web/documentation/#drawing_Toolbox)
   */
  export class Toolbox {
    /**
     * 그리기 툴박스를 생성한다.
     * 툴박스 생성 시 DrawingManager 객체를 설정해야만 DrawingManager에 설정된 그리기 모드를 버튼형식으로 제공한다.
     */
    constructor(options: ToolboxOptions);

    /**
     * 툴박스 엘리먼트를 반환한다. 지도 위에 툴박스를 표시해야 할 때 사용한다.
     */
    public getElement(): ToolboxElement;
  }

  export interface ToolboxElement {}

  export interface ToolboxOptions {
    /**
     * 그리기 모드를 가져올 DrawingManager 객체
     */
    drawingManager: DrawingManager;
  }
}
