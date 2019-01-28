import { DictionaryService } from './../services/dictionary.service';
import { HttpService } from './../services/http-service';
import { Ticket, Users, Flight } from './../entities';
import { FlightSearchService } from './../services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { UserSecurityService } from '../services/user.security.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-buying-form',
  templateUrl: './buying-form.component.html',
  styleUrls: ['./buying-form.component.css']
})
export class BuyingFormComponent implements OnInit {

  constructor(public flightSearchService: FlightSearchService,
    public userService: UserSecurityService, private httpService: HttpService, public dictionary: DictionaryService) { }


  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  surnameFormControl = new FormControl('', [
    Validators.required
  ]);

  phoneNumberFormControl = new FormControl('', [
    Validators.required, Validators.minLength(9), Validators.maxLength(9)
  ]);

  peselFormControl = new FormControl('', [
    Validators.required, Validators.minLength(11), Validators.maxLength(11)
  ]);

  matcher = new ErrorStateMatcher();

  ngOnInit() {
  }



}
