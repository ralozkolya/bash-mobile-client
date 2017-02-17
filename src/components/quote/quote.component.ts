import {Component, Input} from "@angular/core";
import {Quote} from "../../interfaces/interfaces";
import {SocialSharing} from "ionic-native";
import {Vote} from "../../interfaces/enums";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
})
export class QuoteComponent {

  @Input() private quote: Quote;

  private shareUrl: string = 'http://bash.im/quote/';

  private lastVote: Vote;

  constructor(private http: HttpService) {}

  private share(): void {
    SocialSharing.share(null, null, null, this.shareUrl + this.quote.id);
  }

  private voteUp(): void {
    this.vote(Vote.Up);
  }

  private voteDown(): void {
    this.vote(Vote.Down);
  }

  private vote(vote: Vote): void {

    if(!this.lastVote) {

      let id: string = this.quote.id;
      this.lastVote = vote;
      this.quote.votes += vote;

      this.http.vote(id, vote).subscribe(() => {}, () => {});
    }
  }
}
