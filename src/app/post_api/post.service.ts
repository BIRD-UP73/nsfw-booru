import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

export class Post {
  fileUrl: string;
  count: number;
  id: string;
  tags: string;
  video: boolean;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

    constructor(private httpClient: HttpClient) { }

    public getPost(site: string, tags: string, page: number): Promise<Post> {
      const params = new HttpParams()
        .set('limit', '1')
        .set('tags', tags)
        .set('page', page.toString());

      const url = `http://localhost:8080/post/${site}`;

      return this.httpClient.get<Post>(url, {params}).toPromise().then(res => {
        return res;
      }).catch(e => {
        return undefined;
      });
    }
}
