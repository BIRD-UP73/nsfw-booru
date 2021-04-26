import {Injectable} from '@angular/core';
import {SiteOptions} from './site_options';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  constructor(private httpClient: HttpClient) {
  }

  public getSites(): Promise<string[]> {
    return this.httpClient.get<string[]>('http://localhost:8080/sites').toPromise().then(res => {
      return res;
    }).catch(_ => {
      return undefined;
    });
  }
}
