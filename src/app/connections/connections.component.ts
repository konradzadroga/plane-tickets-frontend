import { Connections } from './../entities';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

  connections: Array<Connections>;
  constructor(private httpService: HttpService, public dictionary: DictionaryService) { }

  ngOnInit() {
    this.getConnections();
  }

  getConnections() {
    this.httpService.getConnections().subscribe(connections => {
      this.connections = connections;
      console.log(connections);
    });
  }

}
