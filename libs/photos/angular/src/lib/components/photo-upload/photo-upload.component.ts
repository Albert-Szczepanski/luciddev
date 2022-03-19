import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { PhotosService } from "../../services";
import { Guid } from 'guid-typescript';
import {IPhoto} from "@luciddev/photos/core";

@Component({
  selector: 'photo-upload-component',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss'],
})
export class PhotoUploadComponent implements OnInit, OnDestroy{
  constructor(private service: PhotosService) {
  }
  @ViewChild('fileUpload', {static: true})
  fileUpload: any;

  imagesToSend: IPhoto[] = [];
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

  onUpload(){

  }

  ngOnDestroy() {
  }


}
