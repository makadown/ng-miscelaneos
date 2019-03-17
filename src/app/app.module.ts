import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { CssComponent } from './componentes/css/css.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
