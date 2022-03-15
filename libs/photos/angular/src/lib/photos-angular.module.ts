import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageResizerPage} from "./pages/image-resizer";

@NgModule({
  imports: [CommonModule],
  declarations: [ImageResizerPage],
  exports: [
    ImageResizerPage
  ],
  providers: []
})
export class PhotosAngularModule {}
