import { Component } from '@angular/core';

import { RandomPage } from '../random/random';
import { NewPage } from '../new/new';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = NewPage;
  tab2Root: any = RandomPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
