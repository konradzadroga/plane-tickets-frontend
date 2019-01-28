import { DictionaryService } from './../services/dictionary.service';
import { Ticket } from './../entities';
import { HttpService } from './../services/http-service';
import { UserSecurityService } from './../services/user.security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  tickets: Ticket[];

  constructor(public userService: UserSecurityService, private httpService: HttpService,
    public dictionary: DictionaryService) { }

  ngOnInit() {
  }


}
