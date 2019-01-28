import { HttpService } from './services/http-service';
import { UserSecurityService } from './services/user.security.service';
import { FlightSearchService } from './services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import { TmplAstElement } from '@angular/compiler';
import { Users } from './entities';
import { DictionaryService } from './services/dictionary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  city: string;
  temepature: number;

  info: any;
  private roles: string[];
  public authority: string;
  constructor(private tokenStorage: TokenStorageService, public flightSearchService: FlightSearchService,
     public userService: UserSecurityService, private httpService: HttpService, public dictionary: DictionaryService) { }
  ngOnInit() {

    this.dictionary.setLanguage('en');

    this.getWeather();

    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });

      this.httpService.getUserByLogin(this.tokenStorage.getUsername()).subscribe((user) =>
      this.userService.user = user);
    }
  }

  changeTheme() {
    if (document.body.classList.contains('default-theme')) {
      document.body.classList.remove('default-theme');
      document.body.classList.add('dark-theme');
      console.log(this.tokenStorage.getUsername());
      console.log(this.info.token);
      console.log(this.userService.user);
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('default-theme');
    }
  }

  changeLanguage() {
    if (this.dictionary.getLanguage() === 'pl') {
      this.dictionary.setLanguage('en');
    } else {
      this.dictionary.setLanguage('pl');
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  getWeather() {
    this.httpService.getWeather().subscribe( weather => {
      this.city = weather.name;
      this.temepature = Math.round((((weather.main.temp - 273) * Math.pow(10, 2)))) / Math.pow(10, 2);
    }
    );
  }



}
