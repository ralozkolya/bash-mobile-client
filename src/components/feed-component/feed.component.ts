import {Component, Input, OnInit} from '@angular/core';

import {NavController, Refresher, InfiniteScroll} from 'ionic-angular';
import {HttpService} from "../../services/http.service";
import {Quote} from "../../interfaces/interfaces";
import {FeedType} from "../../interfaces/enums";

@Component({
  selector: 'quote-feed',
  templateUrl: 'feed.component.html'
})
export class FeedComponent implements OnInit {

  @Input()
  private feedType: FeedType;

  @Input()
  private title: string;

  private quotes: Quote[];
  private page: number;

  private loadByRefresher: boolean = false;
  private loadFailed: boolean = false;

  constructor(public navCtrl: NavController, private http: HttpService) {}

  public ngOnInit(): void {
    this.loadQuotes();
  }

  private loadQuotes(refresher: Refresher = null): void {

    this.loadByRefresher = !!refresher;

    this.quotes = null;
    this.loadFailed = false;
    this.http.getFeed(this.feedType).subscribe(response => {

      if(refresher) refresher.complete();

      this.quotes = response.data;

      if(response.page) {
        this.page = response.page;
      }
    }, error => {
      this.loadFailed = true;
    });
  }

  private loadMore(infinite: InfiniteScroll = null): void {

    this.page > 1 ? this.page-- : infinite.enable(false);

    this.http.getFeed(this.feedType, this.page).subscribe(response => {
      if(infinite) infinite.complete();

      this.quotes = this.quotes.concat(response.data);

      if(response.page) {
        this.page = response.page;
      }
    }, error => {
      this.loadFailed = true;
    })
  }
}
