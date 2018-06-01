import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  githubUrl = 'https://github.com/login/oauth/authorize?scope=user:email&client_id=214467e5f997dcaf98d4';

  constructor() { }

  ngOnInit() {
  }

}
