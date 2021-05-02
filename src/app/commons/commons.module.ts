import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NgxFlagPickerModule } from 'ngx-flag-picker';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    NavComponent,
    LanguageSelectorComponent

  ],
  imports: [
    CommonModule,
    NgxFlagPickerModule,
    TranslateModule
  ],
  exports: [
    NavComponent,
    LanguageSelectorComponent

  ]
})
export class CommonsModule { }
