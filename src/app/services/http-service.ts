import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Airport, Connections, Flight, Plane, Ticket, Users, Seats } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  user: Users;

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/weather');
  }


  getUserByLogin(login: string): Observable<Users> {
    return this.http.get<Users>('http://localhost:8080/users?login=' + login);
  }

  getAirports(): Observable<Array<Airport>> {
    return this.http.get<Array<Airport>>('http://localhost:8080/airports');
  }

  getAirport(id: number): Observable<Array<Airport>> {
    return this.http.get<Array<Airport>>('http://localhost:8080/airports/' + id);
  }

  getConnections(): Observable<Array<Connections>> {
    return this.http.get<Array<Connections>>('http://localhost:8080/connections');
  }

  getConnection(id: number): Observable<Array<Connections>> {
    return this.http.get<Array<Connections>>('http://localhost:8080/connections/' + id);
  }

  getFlights(): Observable<Array<Flight>> {
    return this.http.get<Array<Flight>>('http://localhost:8080/flights');
  }

  getFlight(id: number): Observable<Flight> {
    return this.http.get<Flight>('http://localhost:8080/flights/' + id);
  }

  getPlanes(): Observable<Array<Plane>> {
    return this.http.get<Array<Plane>>('http://localhost:8080/planes');
  }

  getSeats(): Observable<Array<Seats>> {
    return this.http.get<Array<Seats>>('http://localhost:8080/seats');
  }

  getPlane(id: number): Observable<Array<Plane>> {
    return this.http.get<Array<Plane>>('http://localhost:8080/planes/' + id);
  }

  getTickets(): Observable<Array<Ticket>> {
    return this.http.get<Array<Ticket>>('http://localhost:8080/tickets');
  }

  getTicketsByUser(id: number): Observable<Array<Ticket>> {
    return this.http.get<Array<Ticket>>('http://localhost:8080/users/' + id + '/tickets');
  }

  getTicket(id: number): Observable<Array<Ticket>> {
    return this.http.get<Array<Ticket>>('http://localhost:8080/tickets/' + id);
  }

  getUsers(): Observable<Array<Users>> {
    return this.http.get<Array<Users>>('http://localhost:8080/users');
  }

  getUser(id: number): Observable<Array<Users>> {
    return this.http.get<Array<Users>>('http://localhost:8080/users/' + id);
  }

  getUserByEmail(email: string): Observable<Users> {
    return this.http.get<Users>('http://localhost:8080/users?email=' + email);
  }

  getSeatsByFlight(id: number): Observable<Array<Seats>> {
    return this.http.get<Array<Seats>>('http://localhost:8080/flights/' + id + '/seats');
  }

  updateSeat(seat: Seats) {
    return this.http.post<Seats>('http://localhost:8080/seats', seat);
  }

  addTicket(ticket: Ticket) {
    return this.http.post<Ticket>('http://localhost:8080/tickets', ticket);
  }

  addFlight(flight: Flight) {
    return this.http.post<Flight>('http://localhost:8080/flights', flight);
  }


  updateUser(user: Users) {
    return this.http.post<Users>('http://localhost:8080/users', user);
  }


  }
