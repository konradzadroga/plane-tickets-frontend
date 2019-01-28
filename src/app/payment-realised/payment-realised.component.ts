import { DictionaryService } from './../services/dictionary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-realised',
  templateUrl: './payment-realised.component.html',
  styleUrls: ['./payment-realised.component.css']
})
export class PaymentRealisedComponent implements OnInit {

  constructor(public dictionary: DictionaryService) { }

  ngOnInit() {
  }

}
