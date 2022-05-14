import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {WordpressAngularModule} from "@luciddev/wordpress/application/angular";
import {environment} from "../environments/environment";
import {HomePage} from "./pages/home/home.page";

const routes: Routes = [
  { path: '', component: HomePage }
];

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    WordpressAngularModule.forRoot(environment.apiUri)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
