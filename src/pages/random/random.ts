import { Component } from '@angular/core';

import { FeedComponent } from "../../components/feed-component/feed.component";
import {FeedType} from "../../interfaces/enums";

@Component({
  selector: 'page-home',
  templateUrl: 'random.html'
})
export class RandomPage extends FeedComponent {

  protected feedType: FeedType = FeedType.Random;

  public ionViewWillEnter(): void {
    console.log(this.http);
    super.ionViewWillEnter();
  }
}
