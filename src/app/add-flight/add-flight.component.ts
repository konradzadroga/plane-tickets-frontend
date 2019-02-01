import { FormControl } from '@angular/forms';
import { HttpService } from './../services/http-service';
import { Plane, Flight, Connections, Airport } from './../entities';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {

  allConnections: Connections[];
  allPlanes: Plane[];
  connection: Connections;
  plane: Plane;
  departureDate: Date;
  departureTime: string;
  arrivalDate: Date;
  arrivalTime: string;
  ticketCost: string;
  flight: Flight;

  departureAirport: string;
  arrivalAirport: string;
  planeName: string;

  airportOptions: string[] = [];

  allAirports: Airport[] = [];

  airportControl = new FormControl();

  filteredAirportOptions: Observable<string[]>;

  clicked: boolean;

  constructor(public dictionary: DictionaryService, private httpService: HttpService) { }

  ngOnInit() {
    this.clicked = false;
    this.httpService.getConnections().subscribe(connections => this.allConnections = connections);
    this.httpService.getPlanes().subscribe(planes => { this.allPlanes = planes; });

    this.httpService.getAirports().subscribe(
      airports => { this.allAirports = airports;
        this.allAirports.forEach(airport => this.airportOptions.push(airport.airportName));
      this.filteredAirportOptions = this.airportControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterAirports(value))
      );
      });
  }

  makeFlight() {
    this.allConnections.forEach(connection => {
      if (connection.departureAirport.airportName === this.departureAirport &&
        connection.arrivalAirport.airportName === this.arrivalAirport) {
        this.connection = connection;
      }
    });

    this.allPlanes.forEach(plane => {
      if (plane.planeName === this.planeName) {
        this.plane = plane;
      }
    });

    this.flight = {
      connection: this.connection,
      plane: this.plane,
      departureDate: this.departureDate,
      departureTime: this.departureTime,
      arrivalDate: this.arrivalDate,
      arrivalTime: this.arrivalTime,
      ticketCost: parseInt(this.ticketCost, 10)
    };
  }

  postFlight() {
    this.httpService.addFlight(this.flight).subscribe();
  }

  private _filterAirports(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.airportOptions.filter(option => option.toLowerCase().includes(filterValue));
  }


}
