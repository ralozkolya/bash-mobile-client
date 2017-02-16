import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Quote} from "../interfaces/interfaces";
import {FeedType} from "../interfaces/enums";

@Injectable()
export class HttpService {

  private baseUrl: string = 'http://localhost:3000/api/';

  constructor(private http: Http) {}

  public getFeed(type: FeedType): Observable<Quote[]> {
    switch (type) {
      case FeedType.Random: return this.getRandom();
      case FeedType.New: return this.getNew();
    }
  }

  public getRandom(): Observable<Quote[]> {
    return this.http.get(`${this.baseUrl}random`)
      .map(response => response.json().data);
  }

  public getNew(): Observable<Quote[]> {
    return this.http.get(this.baseUrl)
      .map(response => response.json().data);
  }
}
