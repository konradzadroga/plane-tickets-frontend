import { FlightSearchService } from './../services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-guest-view-places',
  templateUrl: './guest-view-places.component.html',
  styleUrls: ['./guest-view-places.component.css']
})
export class GuestViewPlacesComponent implements OnInit {

  constructor(public flightSearchService: FlightSearchService, public dictionary: DictionaryService) { }

  ngOnInit() {
  }

}
