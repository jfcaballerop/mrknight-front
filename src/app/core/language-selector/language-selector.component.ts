import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  selectedCountryCode = 'us';
  countryCodes = ['us', 'lu', 'de', 'bs', 'br', 'pt'];
  showFlags = true;
  
  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
