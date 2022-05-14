import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Injectable()
export class WordpressService {
  constructor(@Inject('apiURI') private endpointUrl: string,
              private http: HttpClient) { }
  posts = this.endpointUrl+'wp/v2/posts';

  async getAllPosts(): Promise<any>{
    return await lastValueFrom(this.http.get(this.posts))
  }
  async getPost(id: number): Promise<any>{
    return await lastValueFrom(this.http.get(this.posts+"/"+id))
  }
  async getPostsPage(pageNumber: number): Promise<any>{
    return await lastValueFrom(this.http.get(this.posts+"/page/"+pageNumber))
  }
}
