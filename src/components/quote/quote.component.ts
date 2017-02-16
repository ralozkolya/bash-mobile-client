import {Component, Input} from "@angular/core";
import {Quote} from "../../interfaces/interfaces";
import {SocialSharing} from "ionic-native";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
})
export class QuoteComponent {

  private shareUrl: string = 'http://bash.im/quote/';

  @Input() quote: Quote;

  private share(): void {
    SocialSharing.share(null, null, null, this.shareUrl + this.quote.id)
      .catch(error => {
        console.log(error);
      });
  }
}
