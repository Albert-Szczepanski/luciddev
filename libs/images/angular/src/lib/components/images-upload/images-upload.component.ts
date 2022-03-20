import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { PhotosService } from "../../services";
import { Guid } from 'guid-typescript';
import {ImagesInterface} from "@luciddev/images/core";


@Component({
  selector: 'images-upload-component',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.scss'],
})
export class ImagesUploadComponent implements OnInit, OnDestroy{
  constructor(private service: PhotosService) {
  }
  @ViewChild('fileUpload', {static: true})
  fileUpload: any;

  imagesToSend: ImagesInterface[] = [];
  imagesSize: number = 0

  ngOnInit() {

  }

  onPhotoAdd($event: any){
    this.imagesToSend = $event.currentFiles;
    this.imagesSize = 0
    this.imagesToSend.forEach(image => {
      this.imagesSize += image.size
    })
    this.imagesSize = Math.round(((this.imagesSize / 1024 / 1024) + Number.EPSILON) * 100) / 100
    this.fileUpload.clear();
  }

  onPhotosRemove(){
    this.imagesToSend = [];
  }

  onSendButtonClick(){
    this.resizePhotos()
  }

  async resizePhotos(){
    for (let i = 0; i < this.imagesToSend.length; i++){
      await this.service.sendPhotos('test' + i)
    }
  }

  ngOnDestroy() {
  }


}
