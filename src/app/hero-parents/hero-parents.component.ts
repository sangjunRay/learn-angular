import { Component } from '@angular/core';
import {HEROES} from "../hero";

@Component({
  selector: 'app-hero-parents',
  templateUrl: './hero-parents.component.html',
  styleUrls: ['./hero-parents.component.css']
})
export class HeroParentsComponent {
  heroes = HEROES;
  master ='un7qi3';
}
