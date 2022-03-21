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
  fileUpload: any;

  imagesToSend: File[] = [];
  imagesSize: number = 0

  ngOnInit() {

  }

  onPhotoAdd($event: any){
    this.imagesToSend = $event.target.files;
    this.imagesSize = 0
    for (let i = 0; i < this.imagesToSend.length; i++){
      this.imagesSize += this.imagesToSend[i].size
    }
    this.imagesSize = Math.round(((this.imagesSize / 1024 / 1024) + Number.EPSILON) * 100) / 100
  }

  onPhotosRemove(){
    this.imagesToSend = [];
  }

  onSendButtonClick(){
    this.resizePhotos()
  }

  async resizePhotos(){
    for (let i = 0; i < this.imagesToSend.length; i++){
      await this.service.sendPhotos('test' + i, this.imagesToSend[i])
    }
  }

  ngOnDestroy() {
  }


}
