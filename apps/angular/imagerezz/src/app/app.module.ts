import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ImagesAngularModule} from "@luciddev/images/angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ImagesAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
