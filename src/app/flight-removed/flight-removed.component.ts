import { DictionaryService } from './../services/dictionary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-removed',
  templateUrl: './flight-removed.component.html',
  styleUrls: ['./flight-removed.component.scss']
})
export class FlightRemovedComponent implements OnInit {

  constructor(public dictionary: DictionaryService) { }

  ngOnInit() {
  }

}
