import {Component, OnInit} from '@angular/core';
import {AdItem} from "./ad-item";
import {AdService} from "./ad-banner.service";

@Component({
  selector: 'app-ad-banner',
  template: `
    <div>
      <app-ad-banner-container adHost [ads]="ads"></app-ad-banner-container>
      <app-hero-parents></app-hero-parents>
    </div>
  `,
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerAppComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) {
  }

  ngOnInit() {
    this.ads = this.adService.getAds(3000);
  }

}
