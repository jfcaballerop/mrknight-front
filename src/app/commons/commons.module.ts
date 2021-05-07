import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NgxFlagPickerModule } from 'ngx-flag-picker';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    NavComponent,
    LanguageSelectorComponent,
    ButtonComponent

  ],
  imports: [
    CommonModule,
    NgxFlagPickerModule,
    TranslateModule
  ],
  exports: [
    NavComponent,
    LanguageSelectorComponent,
    ButtonComponent

  ]
})
export class CommonsModule { }
