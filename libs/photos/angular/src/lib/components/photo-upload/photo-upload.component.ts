import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotosService} from "../../services";
import { Guid } from 'guid-typescript';

@Component({
  selector: 'image-resizer-page',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss'],
})
export class PhotoUploadComponent implements OnInit, OnDestroy{
  constructor(private service: PhotosService) {
  }
  sessionId: string | null | undefined;

  ngOnInit() {
    if (localStorage.getItem('SESSION_ID')){
      this.sessionId = localStorage.getItem('SESSION_ID')
    }else {
      this.sessionId = Guid.create().toString()
      localStorage.setItem('SESSION_ID', this.sessionId)
    }
    this.service.getPhotos(this.sessionId as string).subscribe(res => {
      console.log(res)
    })
  }

  ngOnDestroy() {
  }


}
