import {Component, Input} from "@angular/core";
import {AdComponent} from "./ad.component";

@Component({
  styleUrls: ['advertise.css'],
  template:`
    <div>
      <img class="img_box" [src]="data.url" />
    </div>
  `
})

export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
}
