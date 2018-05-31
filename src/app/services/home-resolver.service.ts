import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { GithubService } from './github.service';
import { Observable }             from 'rxjs';
import { map, take }              from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<any>{

  constructor(
    private githubService: GithubService,
    private route: Router

  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.githubService.getRepositories().pipe(
      take(1)
    );
  }
}
