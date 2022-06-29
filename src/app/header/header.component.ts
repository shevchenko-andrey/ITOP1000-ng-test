import { Component, Input, OnInit } from '@angular/core';
import { IResponse } from './response';
import { convertValue } from '../API/exchangeRatesDataAPI';
interface IHeader {
  euroExchangeRate: number;
  dollarExchangeRate: number;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements IHeader, OnInit {
  euroExchangeRate = 0;
  dollarExchangeRate = 0;

  ngOnInit(): void {
    convertValue('USD', 'UAH', 1)
      .then(({ new_amount }: IResponse) => {
        this.dollarExchangeRate = new_amount;
      })
      .catch(console.error);

    convertValue('EUR', 'UAH', 1)
      .then(({ new_amount }: IResponse) => {
        this.euroExchangeRate = new_amount;
      })
      .catch(console.error);
  }
}
