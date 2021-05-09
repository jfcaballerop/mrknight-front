import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonsModule } from '@appCommons';
import { CoreModule } from '@appCore';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    CoreModule,
    CommonsModule,
    HttpClientModule,
    BootstrapModule,
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
