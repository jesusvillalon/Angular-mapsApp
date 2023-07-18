import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAloneComponent } from '../../component/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../component/side-menu/side-menu.component';


@Component({
  standalone: true,
  imports: [CommonModule, CounterAloneComponent, SideMenuComponent],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent {

}
