import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageResizerPage} from "./pages/image-resizer";
import {PhotosService} from "./services";
import {HttpClientModule} from "@angular/common/http";
import {PhotoUploadComponent} from "./components";
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  imports: [CommonModule, HttpClientModule, FileUploadModule],
  declarations: [ImageResizerPage, PhotoUploadComponent],
  exports: [
    ImageResizerPage
  ],
  providers: [PhotosService]
})
export class PhotosAngularModule {}
