import { DictionaryService } from './../services/dictionary.service';
import { FlightSearchService } from './../services/flight-search.service';
import { UserSecurityService } from './../services/user.security.service';
import { Ticket } from './../entities';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(public userService: UserSecurityService, private httpService: HttpService,
    private flightSearchService: FlightSearchService, public dictionary: DictionaryService) { }

  userTickets: Ticket[];

  ngOnInit() {
    this.getTicketsByUser(this.userService.getUser().id);
  }

  getTicketsByUser(id: number) {
    this.httpService.getTicketsByUser(id).subscribe(tickets =>
      this.userTickets = tickets);
  }

  makeTicketTheOneToShow(ticket: Ticket) {
    this.flightSearchService.ticketToShow = ticket;
  }

}
