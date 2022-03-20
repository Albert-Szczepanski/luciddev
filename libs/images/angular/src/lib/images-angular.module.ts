import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageResizerPage} from "./pages/image-resizer";
import {PhotosService} from "./services";
import {HttpClientModule} from "@angular/common/http";
import {ImagesUploadComponent} from "./components";
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  imports: [CommonModule, HttpClientModule, FileUploadModule],
  declarations: [ImageResizerPage, ImagesUploadComponent],
  exports: [
    ImageResizerPage
  ],
  providers: [PhotosService]
})
export class ImagesAngularModule {}
