import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageResizerPage} from "./pages/image-resizer";
import {PhotosService} from "./services";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ImageResizerPage],
  exports: [
    ImageResizerPage
  ],
  providers: [PhotosService]
})
export class PhotosAngularModule {}
