import { HttpService } from './../services/http-service';
import { Plane } from './../entities';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

  planes: Plane[] = [];

  constructor(public dictionary: DictionaryService, private httpService: HttpService) { }

  ngOnInit() {
    this.getPlanes();
  }

  getPlanes() {
    this.httpService.getPlanes().subscribe(planes => {
      this.planes = planes;
    });
  }

}
