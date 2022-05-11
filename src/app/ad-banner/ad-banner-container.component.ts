import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from "@angular/core";
import {AdItem} from "./ad-item";
import {AdDirective} from "./ad-banner.directive";
import {AdComponent} from "./ad.component";


@Component({
  selector: 'app-ad-banner-container',
  styleUrls: ['add-banner-container.css'],
  template: `
    <div (mouseover)="onMouseOver()" (mouseleave)="onMouseLeave()" class="advertise_container">
      <ng-template adHost></ng-template>
    </div>
  `
})
export class AdBannerContainerComponent implements OnInit {

  currentAdIndex = -1;
  interval: number | undefined;

  @Input() ads: AdItem[] = [];

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  ngOnInit(): void {
    this.loadComponent();
    this.getAds(2000);
    console.log('now interval =', this.interval)
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex]
    const viewContainerRef = this.adHost.viewContainerRef;

    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds(setTime: number) {
    this.interval = setInterval(() => {
      this.loadComponent()
    }, setTime)
  }

  onMouseOver() {
    clearInterval(this.interval);
    this.getAds(10000);
    console.log('now interval =', this.interval)
  }

  onMouseLeave() {
    clearInterval(this.interval);
    this.getAds(2000);
    console.log('now interval =', this.interval)
  }
}


