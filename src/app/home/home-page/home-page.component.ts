import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  labelTextButton: string;
  buttonName: string;
  ButtonAceptar: true;
  constructor() { }

  ngOnInit(): void {
    this.runTranslates();
  }

  private runTranslates(): void {
    this.labelTextButton = 'BUTTON-HOME-MAIN-PAGE-TEXT';
    this.buttonName = 'MAIN_BUTTON';
  }

  clicButton(but: string) {
    console.log('Evento: ', but);
    switch (but) {
      case 'CLIC_MAIN_BUTTON':
        console.log('VAL', but);

        break;
      case 'CLIC_SENCOND':
        console.log('VAL', but);

        break;

      default:
        break;
    }

  }

}
