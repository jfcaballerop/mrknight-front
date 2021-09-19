import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NgxFlagPickerModule } from 'ngx-flag-picker';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from './button/button.component';
import { CoreModule } from '@appCore';
import { ChuckyNorrisComponent } from './chucky-norris/chucky-norris.component';
import { ChuckyService } from '../services';



@NgModule({
  declarations: [
    NavComponent,
    LanguageSelectorComponent,
    ButtonComponent,
    ChuckyNorrisComponent

  ],
  imports: [
    CommonModule,
    NgxFlagPickerModule,
    TranslateModule,
    CoreModule
  ],
  exports: [
    NavComponent,
    LanguageSelectorComponent,
    ButtonComponent

  ],
  providers: [
    ChuckyService
  ]
})
export class CommonsModule { }
