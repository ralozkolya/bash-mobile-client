import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NewPage } from '../pages/new/new';
import { ContactPage } from '../pages/contact/contact';
import { RandomPage } from '../pages/random/random';
import { TabsPage } from '../pages/tabs/tabs';
import { QuoteComponent } from '../components/quote/quote.component';
import { HttpService } from "../services/http.service";
import {FeedComponent} from "../components/feed-component/feed.component";

@NgModule({
  declarations: [
    MyApp,
    NewPage,
    ContactPage,
    RandomPage,
    TabsPage,
    QuoteComponent,
    FeedComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewPage,
    ContactPage,
    RandomPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
  ]
})
export class AppModule {}
