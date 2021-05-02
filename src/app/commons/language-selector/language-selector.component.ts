import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  selectedCountryCode = 'es';
  countryCodes = ['es', 'gb'];
  showFlags = true;

  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
    this.translate.use(value);

  }
  constructor(public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

}
