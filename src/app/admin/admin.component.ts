import { DictionaryService } from './../services/dictionary.service';
import { HttpService } from '../services/http-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private httpService: HttpService, public dictionary: DictionaryService) { }

  ngOnInit() {
  }

}
