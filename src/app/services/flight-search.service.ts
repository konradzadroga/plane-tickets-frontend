import { Airport } from './../entities';
import { Injectable } from '@angular/core';
import { Flight, Seats, Ticket, Users } from '../entities';
import { HttpService } from './http-service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  departure: string;
  arrival: string;
  dateDeparture: Date;
  flight: Flight;
  flights: Array<Flight> = [];
  flightsFiltered: Array<Flight> = [];
  seats: Array<Seats> = [];
  howManyPassengers: number;
  howManyPassengersAtFirst: number;
  category: number;
  chosenSeats: Array<Seats> = [];
  dateTyped: string;
  insurance: boolean[] = [];
  names: string[] = [];
  surnames: string[] = [];
  pesels: number[] = [];
  phonenumbers: number[] = [];
  tickets: Ticket[] = [];
  ticket: Ticket;
  clicked: boolean[] = [];
  allClicked = false;
  freeSeats: number;
  allSeats: Seats[] = [];
  paymentSum: number;
  clickedRadio: boolean[] = [];
  ticketToShow: Ticket;

  constructor(private httpService: HttpService, private datePipe: DatePipe) { }

  getFlights() {
    this.httpService.getFlights().subscribe(flights => {
      this.flights = flights;
      this.dateTyped = this.datePipe.transform(this.dateDeparture, 'dd/MM/yyyy');
      this.flightsFiltered = this.flights
      .filter((flight) => flight.connection.departureAirport.airportName === this.departure &&
      flight.connection.arrivalAirport.airportName === this.arrival
      && this.datePipe.transform(flight.departureDate, 'dd/MM/yyyy') === this.dateTyped);
      this.flights = this.flightsFiltered;
      this.howManyPassengersAtFirst = this.howManyPassengers;
    });
}


 getFlight(id: number) {
   this.httpService.getFlight(id).subscribe(flight => {
     this.flight = flight;
   });
 }

 getSeatsByFlight(id: number) {
   this.httpService.getSeatsByFlight(id).subscribe(seats => {
     this.seats = seats;
   });
 }

 getAllSeats() {
   this.httpService.getSeats().subscribe(allSeats => {
     this.allSeats = allSeats;
   });
 }


 getFreeSeatsInCategory(id: number): number {
   let i = 0;
   this.allSeats.forEach((seat) => {
    if (seat.free === true && seat.flight.flightID === id && String(seat.category) === String(this.category)) {
      i = i + 1;
    }
   });
   return i;
   }


 getHowManyPassengers(id: number) {
  return this.howManyPassengers;
}

  setHowManyPassengers(howMany: number) {
    this.howManyPassengers = howMany;
  }

  getCategory(): string {
    if (String(this.category) === '2') {
      return 'Pierwsza klasa';
    } else {
      return 'Druga klasa';
    }
  }

  addToChosenSeats(seat: Seats) {
    this.chosenSeats.push(seat);
  }

  setSeatOccuped(seat: Seats) {
    seat.free = false;
  }

  updateSeat(seat: Seats) {
    this.httpService.updateSeat(seat).subscribe();
  }
  getNumberOfCategory(): number {
    return this.category;
  }

  makeTicket(name: string, surname: string, ticketCost: number, category: string,
    whichRow: number, place: number, user: Users, flight: Flight, insurance: boolean, phonenumber: number, pesel: number): Ticket {
   this.ticket = {
     name: name,
     surname: surname,
     ticketCost: ticketCost,
     category: category,
     whichRow: whichRow,
     place: place,
     user: user,
     flight: flight,
     insurance: insurance,
     phonenumber: phonenumber,
     pesel: pesel
   };

   return this.ticket;
 }



 showList() {
   console.log(this.tickets);
 }

 addTickets() {
   console.log(this.tickets);
   this.tickets.forEach((ticket) => {
     this.httpService.addTicket(ticket).subscribe();
   });
 }

 isAllClicked() {
   let x = 0;
   this.clicked.forEach((click) => {
     if (click === true) {
       x = x + 1;
     }
   }
   );

   if (x === this.chosenSeats.length) {
     this.allClicked = true;
   }
 }

 clearChosenSeats() {
  this.seats.forEach((seat) => {
    this.chosenSeats.forEach((chosenSeat) => {
      if (seat.seatID === chosenSeat.seatID) {
        seat.free = true;
      }
    });
  });
   this.setHowManyPassengers(this.howManyPassengersAtFirst);
   this.chosenSeats = [];
 }

 makePlacesReserved() {
   this.chosenSeats.forEach((seat) => {
     this.httpService.updateSeat(seat).subscribe();
   });
 }

 clearArrays() {
   this.flights = [];
   this.clicked = [];
   this.clickedRadio = [];
   this.seats = [];
   this.chosenSeats = [];
   this.names = [];
   this.surnames = [];
   this.pesels = [];
   this.tickets = [];
   this.insurance = [];
   this.phonenumbers = [];
   this.howManyPassengers = 0;
   this.allClicked = false;
   this.howManyPassengersAtFirst = 0;
   this.paymentSum = 0;
   this.dateDeparture = undefined;
   this.departure = '';
   this.arrival = '';
   this.category = undefined;
 }

 countPaymentSummary() {
    let sum = 0;
    this.tickets.forEach((ticket) => {
      sum = sum + ticket.ticketCost;
    }
    );
    this.paymentSum = sum;
 }

 updateUser(user: Users) {
   this.httpService.updateUser(user).subscribe();
 }


}
