import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonsModule } from '../commons/commons.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonsModule
  ],
  exports:
  [
    HomePageComponent
  ]
})
export class HomeModule { }
