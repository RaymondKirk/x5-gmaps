export interface PopupType extends google.maps.OverlayView {
  position: google.maps.LatLng;
  content: HTMLElement;
  setPosition: (position: google.maps.LatLngLiteral) => void;
}

// TODO: Can't figure out the type vs class definition here
export const createPopupClass = (): any => {
  /**
   * A customized popup on the map.
   */
  return class Popup extends google.maps.OverlayView {
    position: google.maps.LatLng;
    content: HTMLElement;

    constructor(position: google.maps.LatLngLiteral, content: Element) {
      super();
      this.position = new globalThis.google.maps.LatLng(position);
      this.content = content as HTMLElement;

      // Optionally stop clicks, etc., from bubbling up to the map.
      Popup.preventMapHitsAndGesturesFrom(this.content);
    }

    /** Called when the popup is added to the map. */
    onAdd() {
      const panes = this.getPanes();
      this.content.addEventListener('touchstart', () => null, {
        passive: true
      });
      this.content.addEventListener('touchmove', () => null, {
        passive: true
      });
      if (panes) panes.floatPane.appendChild(this.content);
    }

    /** Called when the popup is removed from the map. */
    onRemove() {
      if (this.content.parentElement)
        this.content.parentElement.removeChild(this.content);
    }

    /** Called each frame when the popup needs to draw itself. */
    // TODO: This is called soooo much
    draw() {
      const projection = this.getProjection();
      if (!projection) return this.onRemove();
      const divPosition = projection.fromLatLngToDivPixel(this.position);

      // Hide the popup when it is far out of view.
      // TODO: Make this a prop
      const display =
        divPosition &&
        Math.abs(divPosition.x) < 4000 &&
        Math.abs(divPosition.y) < 4000
          ? 'block'
          : 'none';
      if (display === 'block') {
        this.content.style.left = divPosition.x + 'px';
        this.content.style.top = divPosition.y + 'px';
      }

      if (this.content.style.display !== display) {
        this.content.style.display = display;
      }
    }

    // Custom
    setPosition(position: google.maps.LatLngLiteral) {
      this.position = new globalThis.google.maps.LatLng(position);
      this.draw();
    }
  };
};
