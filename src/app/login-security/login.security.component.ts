import { DictionaryService } from './../services/dictionary.service';
import { HttpService } from './../services/http-service';
import { UserSecurityService } from './../services/user.security.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-login-security',
  templateUrl: './login.security.component.html',
  styleUrls: ['./login.security.component.css']
})
export class LoginSecurityComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  loginFormControl = new FormControl('', [
    Validators.required,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new ErrorStateMatcher();



  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, public userService: UserSecurityService,
    private httpService: HttpService, public dictionary: DictionaryService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.httpService.getUserByLogin(this.tokenStorage.getUsername()).subscribe((user) =>
      this.userService.user = user);
    }
  }


  login() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();

        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
