import { FlightSearchService } from './../services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from '../entities';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor(public flightSearchService: FlightSearchService, public dictionary: DictionaryService) { }


  ngOnInit() {
  }

}
