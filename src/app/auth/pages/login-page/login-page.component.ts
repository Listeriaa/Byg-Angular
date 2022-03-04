import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/credentials';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  credentials = {} as Credentials;

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    if(this.credentials.email) {
      //
    }
    console.log(this.credentials);
  }
}
