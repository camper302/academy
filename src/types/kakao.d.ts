declare global {
  interface Window {
    kakao: {
      maps: {
        load(callback: () => void): void;
        Map: new (container: HTMLElement, options: any) => any;
        LatLng: new (lat: number, lng: number) => any;
        Marker: new (options: any) => any;
        InfoWindow: new (options: any) => any;
        services: {
          Geocoder: new () => any;
          Places: new () => any;
        };
      };
    };
  }
}

export {}; 