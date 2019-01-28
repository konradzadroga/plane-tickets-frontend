import { FlightSearchService } from './../services/flight-search.service';
import { HttpService } from '../services/http-service';
import { Flight, Airport } from './../entities';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-flight-searching',
  templateUrl: './flight-searching.component.html',
  styleUrls: ['./flight-searching.component.css']
})
export class FlightSearchingComponent implements OnInit {

  date = new Date();
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options: string[] = [];
  allAirports: Airport[] = [];


  constructor(private httpService: HttpService, public flightSearchService: FlightSearchService,
    public dictionary: DictionaryService) { }

  ngOnInit() {
    this.flightSearchService.getAllSeats();
    this.httpService.getAirports().subscribe(
      airports => { this.allAirports = airports;
        this.allAirports.forEach(airport => this.options.push(airport.airportName));
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


}
