import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonsModule } from '../commons/commons.module';
import { HomeMainPageComponent } from './home-main-page/home-main-page.component';



@NgModule({
  declarations: [HomePageComponent, HomeMainPageComponent],
  imports: [
    CommonsModule
  ],
  exports:
  [
    HomePageComponent,
    HomeMainPageComponent
  ]
})
export class HomeModule { }
