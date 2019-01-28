import { HttpService } from './../services/http-service';
import { Plane, Flight, Connections } from './../entities';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

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
  connectionID: number;
  planeID: number;
  departureDate: Date;
  departureTime: string;
  arrivalDate: Date;
  arrivalTime: string;
  ticketCost: string;
  flight: Flight;

  clicked: boolean;

  constructor(public dictionary: DictionaryService, private httpService: HttpService) { }

  ngOnInit() {
    this.clicked = false;
    this.httpService.getConnections().subscribe(connections => this.allConnections = connections);
    this.httpService.getPlanes().subscribe(planes => this.allPlanes = planes);
  }

  makeFlight() {
    this.allConnections.forEach(connection => {
      if (String(connection.connectionID) === String(this.connectionID)) {
        this.connection = connection;
      }
    });

    this.allPlanes.forEach(plane => {
      if (String(plane.planeID) === String(this.planeID)) {
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

}
