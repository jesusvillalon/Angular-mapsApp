import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken = 'pk.eyJ1IjoidmlsbGFsb245MiIsImEiOiJjbGs2bmwxYWowMHRyM2RxazJhZXhyNWR4In0.za4skVSYRUrjNItOLd1R6A';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';


import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { CounterAloneComponent } from '../alone/component/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../alone/component/side-menu/side-menu.component';


@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent, //Se pone aquí por que es un "standalone component "
    SideMenuComponent,
  ]
})
export class MapsModule { }
