declare namespace kakao.maps {
  export function load(callback: () => void): void;
  
  export class Map {
    constructor(container: HTMLElement, options: MapOptions);
  }
  
  export class LatLng {
    constructor(lat: number, lng: number);
  }
  
  export class Marker {
    constructor(options: MarkerOptions);
    setMap(map: Map | null): void;
  }
  
  export class InfoWindow {
    constructor(options: InfoWindowOptions);
    open(map: Map, marker: Marker): void;
  }
  
  export namespace event {
    export function addListener(
      target: any,
      type: string,
      callback: () => void
    ): void;
  }
  
  export namespace services {
    export class Geocoder {}
    export class Places {}
  }
  
  export interface MapOptions {
    center: LatLng;
    level: number;
  }
  
  export interface MarkerOptions {
    position: LatLng;
    title?: string;
  }
  
  export interface InfoWindowOptions {
    content: string;
  }
}

interface Window {
  kakao: {
    maps: typeof kakao.maps;
  };
}

export {}; 