import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github.service';
import { Repository } from '../models/repository';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  repos: Repository[];

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) { }

  ngOnInit() {
    this.subscription = this.route.data.subscribe((data) => {
      this.repos = data.repos
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
