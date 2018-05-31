import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private token: string;

  constructor(
    private http: HttpClient
  ) { }

  getToken(code: string) {
    const url = `api/access_token/${code}`;
    return this.http.get(url).pipe(
      tap(this.saveToken.bind(this))
    );
  }

  getRepositories() {
    const options = {
      headers: {
        'Authorization': `token ${this.token}`
      }
    }
    return this.http.get('api/user/repos', options);
  }

  private saveToken(tokenInfo) {
    this.token = tokenInfo.access_token;
    const jsonString = JSON.stringify(tokenInfo)
    window.localStorage.setItem('token', jsonString);
  }


}
