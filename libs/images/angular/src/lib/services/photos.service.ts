import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

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
    return this.http.get(`http://localhost:3333/photos/${userId}/images`, {headers: this.headers})
  }

  sendPhotos(userId:string): Promise<any>{
    return lastValueFrom(this.http.get(`http://localhost:3333/photos/${userId}/images`, {headers: this.headers}))
  }
}
