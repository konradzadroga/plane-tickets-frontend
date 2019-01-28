import { DictionaryService } from './../services/dictionary.service';
import { FlightSearchService } from './../services/flight-search.service';
import { Users } from './../entities';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpService } from '../services/http-service';
import { UserSecurityService } from '../services/user.security.service';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.css']
})
export class ProfilEditComponent implements OnInit {

  tempName: string;
  tempSurname: string;
  tempPhoneNumber: number;
  clicked = false;

    nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  surnameFormControl = new FormControl('', [
    Validators.required,
  ]);

  phoneNumberFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(9),
    Validators.maxLength(9)
  ]);

  user: Users;

  matcher = new ErrorStateMatcher();
  constructor(private httpService: HttpService, public userService: UserSecurityService,
     public flightSearchService: FlightSearchService, public dictionary: DictionaryService) { }


  ngOnInit() {
    this.user = this.userService.user;
  }

  updateUserDetails() {
    this.user.name = this.tempName;
    this.user.surname = this.tempSurname;
    this.user.phoneNumber = this.tempPhoneNumber;
  }

}
