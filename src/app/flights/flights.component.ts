import { Flight } from './../entities';
import { HttpService } from '../services/http-service';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flights: Array<Flight>;
  constructor(private httpService: HttpService, public dictionary: DictionaryService) { }

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.httpService.getFlights().subscribe(flights => {
      this.flights = flights;
    });
  }

}
