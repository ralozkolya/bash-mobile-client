import {Component, Input} from "@angular/core";
import {Quote} from "../../interfaces/interfaces";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
})
export class QuoteComponent {

  @Input() quote: Quote;
}
