import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PhotosAngularModule} from "@luciddev/photos/angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PhotosAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
