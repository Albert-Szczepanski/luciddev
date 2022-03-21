import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {ImagesInterface} from "@luciddev/images/core";

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) { }

  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  }

  getPhotos(userId:string){
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    }
    return this.http.get(`http://localhost:3333/images/${userId}/images`, {headers: headers})
  }

  sendPhotos(userId:string, file: File): Promise<any>{
    let fileFormData = new FormData();
    fileFormData.append('file', file)
    return lastValueFrom(this.http
      .post(
        `http://localhost:3333/images/${userId}/saveImage`,
        fileFormData))
  }
}
