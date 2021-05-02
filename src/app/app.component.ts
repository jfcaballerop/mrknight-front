import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'mrknight-front';
  quien: string;

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['es', 'gb']);
    translate.setDefaultLang('es');
  }
}
