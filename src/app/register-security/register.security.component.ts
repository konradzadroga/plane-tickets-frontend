import { DictionaryService } from './../services/dictionary.service';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder,
  AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-register-security',
  templateUrl: './register.security.component.html',
  styleUrls: ['./register.security.component.css']
})

export class RegisterSecurityComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  passwordFormGroup: FormGroup;
  emailFormGroup: FormGroup;

  matcherpass = new MyErrorStateMatcher();
  matcheremail = new MyErrorStateMatcher();
  matcher = new ErrorStateMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  surnameFormControl = new FormControl('', [
    Validators.required,
  ]);


  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  phoneNumberFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(9),
    Validators.maxLength(9)
  ]);

  statuteFormControl = new FormControl('', [
    Validators.required,
  ]);



  checkPasswords(group: FormGroup) {
  const pass = group.controls.password.value;
  const confirmPass = group.controls.confirmPassword.value;

  return pass === confirmPass ? null : { notSame: true };
}

  constructor(private authService: AuthService, private formBuilder: FormBuilder, public dictionary: DictionaryService) {
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(9)]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });

    this.emailFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
   }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.surname,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.phoneNumber);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
