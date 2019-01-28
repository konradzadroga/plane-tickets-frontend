import { HttpService } from '../services/http-service';
import { FlightSearchService } from './../services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-choose-place',
  templateUrl: './choose-place.component.html',
  styleUrls: ['./choose-place.component.css']
})
export class ChoosePlaceComponent implements OnInit {

  constructor(public flightSearchService: FlightSearchService, public httpService: HttpService, public dictionary: DictionaryService) { }

  ngOnInit() {
  }


}
