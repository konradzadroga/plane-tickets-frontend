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

  currentDate: Date;

  constructor(public flightSearchService: FlightSearchService, public userService: UserSecurityService,
    public dictionary: DictionaryService) {
      this.currentDate = new Date();
    }

  ngOnInit() {
  }

  compareDates(): boolean {
    if (this.currentDate >= this.flightSearchService.dateDeparture) {
      return true;
    } else {
      return false;
    }
  }

}
