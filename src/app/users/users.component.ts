import { HttpService } from '../services/http-service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../entities';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] = [];
  constructor(private httpService: HttpService, public dictionary: DictionaryService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.httpService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
