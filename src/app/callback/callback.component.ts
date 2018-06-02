import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit, OnDestroy {
  private subToken: Subscription;
  private querySub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private githubService: GithubService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.querySub = this.route.queryParamMap.subscribe((data) => {
      const code = data.get('code');
      this.redirectUser(code);
    });
  }

  ngOnDestroy() {
    this.subToken.unsubscribe();
    this.querySub.unsubscribe();
  }

  redirectUser(code) {
    if(code) {
      this.subToken = this.githubService.getToken(code).subscribe(
        () => this.router.navigate(['/home']),
        () => this.onError()
      )
    } else {
      this.onError();
    }
  }

  onError() {
    this.toastr.error('Login failed, please try again');
    this.router.navigate(['login']);
  }

}
