import { UserSecurityService } from './../services/user.security.service';
import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../services/flight-search.service';
import { DictionaryService } from '../services/dictionary.service';

@Component ({
  selector: 'app-flight-search-result',
  templateUrl: './flight-search-result.component.html',
  styleUrls: ['./flight-search-result.component.css']
})
export class FlightSearchResultComponent implements OnInit {

  constructor(public flightSearchService: FlightSearchService, public userService: UserSecurityService,
    public dictionary: DictionaryService) { }

  ngOnInit() {
  }

}
