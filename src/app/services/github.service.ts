import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';

import { Repository } from '../models/repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private token: string;

  constructor(
    private http: HttpClient
  ) { 
    const info = window.localStorage.getItem('token');
    const infoParsed = JSON.parse(info);
    this.token = infoParsed && infoParsed.access_token;
  }

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
    };
    return this.http.get('api/user/repos', options).pipe(
      map(this.mapRepos.bind(this))
    );
  }

  private mapRepos(data): Repository[] {
    console.log(data)
    return data.map((repo) => {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        private: repo.private,
        url: repo.html_url,
        stargazers: repo.stargazers_count,
        watchers: repo.watchers_count,
        language: repo.language,
        forks: repo.forks,
        isFork: repo.fork
      } as Repository;
    });
  }

  private saveToken(tokenInfo) {
    this.token = tokenInfo.access_token;
    const jsonString = JSON.stringify(tokenInfo)
    window.localStorage.setItem('token', jsonString);
  }


}
