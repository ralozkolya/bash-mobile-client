import { Component } from '@angular/core';
import {FeedType} from "../../interfaces/enums";

@Component({
  selector: 'page-home',
  templateUrl: 'random.html'
})
export class RandomPage {
  private title: string = 'Случайные';
  private feedType: FeedType = FeedType.Random;
}
