import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxFlagPickerModule } from 'ngx-flag-picker';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';



@NgModule({
  declarations: [
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    NgxFlagPickerModule
  ],
  exports: [
    LanguageSelectorComponent
  ]
})
export class CoreModule { }
