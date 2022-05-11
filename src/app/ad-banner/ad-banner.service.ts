import {Injectable} from "@angular/core";
import {AdItem} from "./ad-item";
import {HeroJobAdComponent} from "./hero-job-ad.component";

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        HeroJobAdComponent,
        {url: 'https://static.forceteller.com/_3/f3/b862/2612c2937a7cb13690395e819833fed54.jpg', body: 'Submit your resume today!'}
      ),
      new AdItem(
        HeroJobAdComponent,
        {url: 'https://static.forceteller.com/d/3d/8dd4/0d519944f21237380e6705e9582d13899.jpg', body: 'Apply today'}
      ),
      new AdItem(
        HeroJobAdComponent,
        {url: 'https://static.forceteller.com/b/bf/57fd/df8e599456aed8f7d7864256b14d8e3c4.jpg', body: 'Apply today'}
      )
      ,
      new AdItem(
        HeroJobAdComponent,
        {url: 'https://static.forceteller.com/8/62/fb9b/c8203d29bdd777eb5ef5f0f47be68d333.jpg', body: 'Apply today'}
      )]
  }
}


