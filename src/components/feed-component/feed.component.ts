import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';

import {NavController, Refresher, InfiniteScroll, Content} from 'ionic-angular';
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

  @ViewChild(Content)
  private content: Content;

  private quotes: Quote[];
  private page: number;

  private loadByRefresher: boolean = false;
  private loadFailed: boolean = false;
  private loading: boolean = false;

  constructor(public navCtrl: NavController, private http: HttpService) {}

  public ngOnInit(): void {
    this.loadQuotes();
  }

  private loadQuotes(refresher: Refresher = null): void {

    if(this.content && !refresher) this.content.scrollToTop(300);

    this.loading = true;

    this.loadByRefresher = !!refresher;

    this.loadFailed = false;
    this.http.getFeed(this.feedType).subscribe(response => {

      if(refresher) refresher.complete();

      this.quotes = response.data;

      if(response.page) {
        this.page = response.page;
      }
      this.loading = false;
    }, error => {
      this.loadFailed = true;
      this.loading = false;
    });
  }

  private loadMore(infinite: InfiniteScroll = null): void {

    if(!this.page || this.page < 2) {
      infinite.enable(false);
      return;
    }

    this.page--;

    this.http.getFeed(this.feedType, this.page).subscribe(response => {
      if(infinite) infinite.complete();

      this.quotes = this.quotes.concat(response.data);

      if(response.page) {
        this.page = response.page;
      }
    }, error => {
      this.loadFailed = true;
    });
  }

  private showLoadMoreButton(): boolean {
    return this.feedType === FeedType.Random;
  }

  private showInfiniteScrolling(): boolean {
    return this.feedType !== FeedType.Random && this.page > 1;
  }
}
