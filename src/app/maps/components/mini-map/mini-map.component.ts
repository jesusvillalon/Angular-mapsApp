import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit{

  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;


  ngAfterViewInit(){
    if(!this.divMap?.nativeElement) throw "Map Div not found"
    if(!this.lngLat) throw "LngLat can't be null"

    // mapa
    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive: false,
    })

    // marker
    new Marker()
      .setLngLat(this.lngLat)
      .addTo(map)

  }



}
