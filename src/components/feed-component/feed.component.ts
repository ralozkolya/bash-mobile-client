import { Component } from '@angular/core';

import {NavController, Refresher} from 'ionic-angular';
import {HttpService} from "../../services/http.service";
import {Quote} from "../../interfaces/interfaces";
import {FeedType} from "../../interfaces/enums";

@Component({
  selector: 'page-home',
  templateUrl: 'feed.component.html'
})
export class FeedComponent {

  protected feedType: FeedType;

  protected quotes: Quote[];
  protected loadByRefresher: boolean = false;
  protected loadFailed: boolean = false;

  constructor(public navCtrl: NavController, protected http: HttpService) {
    console.log(http);
  }

  public ionViewWillEnter(): void {

    this.loadQuotes();
  }

  private loadQuotes(refresher: Refresher = null): void {

    this.loadByRefresher = !!refresher;

    this.quotes = null;
    this.loadFailed = false;
    this.http.getFeed(this.feedType).subscribe(response => {

      if(refresher) refresher.complete();

      this.quotes = response;
    }, error => {
      this.loadFailed = true;
    });
  }
}
