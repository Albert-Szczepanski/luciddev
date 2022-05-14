import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WordpressService} from "./services/wordpress.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [WordpressService],
})
export class WordpressAngularModule {

  public static forRoot(apiURI: any): ModuleWithProviders<any> {

    return {
      ngModule: WordpressAngularModule,
      providers: [
        WordpressService,
        {
          provide: 'apiURI',
          useValue: apiURI
        }
      ]
    };
  }
}
