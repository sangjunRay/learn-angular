import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentsComponent } from './hero-parents/hero-parents.component';
import { AdBannerAppComponent } from './ad-banner/ad-banner-app.component';
import {AdBannerContainerComponent} from "./ad-banner/ad-banner-container.component";
import {AdDirective} from "./ad-banner/ad-banner.directive";
import {AdService} from "./ad-banner/ad-banner.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentsComponent,
    AdBannerAppComponent,
    AdBannerContainerComponent,
    AdDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule {}
