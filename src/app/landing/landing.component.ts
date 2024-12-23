import { Component } from '@angular/core';
import { ListComponent } from "../list/list.component";
import { GridComponent } from "../grid/grid.component";

@Component({
  selector: 'app-landing',
  imports: [ListComponent, GridComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  switcher: string = 'list'
  toggle(arg0: string) {
    this.switcher = arg0
  }


}
