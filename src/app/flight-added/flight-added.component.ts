import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-flight-added',
  templateUrl: './flight-added.component.html',
  styleUrls: ['./flight-added.component.scss']
})
export class FlightAddedComponent implements OnInit {

  constructor(public dictionary: DictionaryService) { }

  ngOnInit() {
  }

}
