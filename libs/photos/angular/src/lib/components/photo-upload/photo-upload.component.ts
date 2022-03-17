import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotosService} from "../../services";
import { Guid } from 'guid-typescript';

@Component({
  selector: 'photo-upload-component',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss'],
})
export class PhotoUploadComponent implements OnInit, OnDestroy{
  constructor(private service: PhotosService) {
  }

  ngOnInit() {

  }

  onPhotoAdd($event: any){
    console.log($event)
  }

  onUpload(){

  }

  ngOnDestroy() {
  }


}
