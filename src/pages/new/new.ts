import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {FeedType} from "../../interfaces/enums";

@Component({
  selector: 'page-about',
  templateUrl: 'new.html'
})
export class NewPage {
  private title: string = 'Новые';
  private feedType: FeedType = FeedType.New;
}
