import {Http, Response, Headers, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {QuotesResponse} from "../interfaces/interfaces";
import {FeedType, Vote} from "../interfaces/enums";

@Injectable()
export class HttpService {

  private baseUrl: string = 'http://localhost:3000/api/';

  constructor(private http: Http) {}

  public getFeed(type: FeedType, page: number = null): Observable<QuotesResponse> {
    switch (type) {
      case FeedType.Random: return this.getRandom();
      case FeedType.New: return this.getNew(page);
    }
  }

  public getRandom(): Observable<QuotesResponse> {
    return this.http.get(`${this.baseUrl}random`)
      .map(response => response.json());
  }

  public getNew(page: number = null): Observable<QuotesResponse> {

    let url: string = this.baseUrl;

    if(page) url += page;

    return this.http.get(url)
      .map(response => response.json());
  }

  public vote(quote: string, type: Vote): Observable<Response> {

    let act: string;

    if(type === Vote.Up) {
      act = 'rulez';
    } else {
      act = 'sux';
    }

    let url: string = `${this.baseUrl}vote`;

    let urlSearchParams: URLSearchParams = new URLSearchParams();
    urlSearchParams.append('quote', quote);
    urlSearchParams.append('act', act);

    return this.http.post(url, urlSearchParams);
  }
}
