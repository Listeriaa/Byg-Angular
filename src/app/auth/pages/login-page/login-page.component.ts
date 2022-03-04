import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/credentials';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  credentials = {} as Credentials;

  constructor(private authService: AuthService) {
    console.log('random from login page', authService.random)
  }

  ngOnInit(): void {
  }

  submit(): void {
    if(this.credentials.email) {
      //send value to observable (le behavior subject)
      this.authService.isLoggedIn.next(true);
    }
    console.log(this.credentials);
  }
}
