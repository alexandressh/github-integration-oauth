import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github.service';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  repos: Repository[];

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.repos = data.repos
    });
  }

}
