import { Injectable } from '@angular/core';
import {Countries} from './Countries';
import {States} from './States';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

   getCountries() {
    return [new Countries(1, 'USA'),
            new Countries(2, 'Australia')];
   }
   getStates(){
    return [new States(1, 1, 'Alaska'),
            new States(2, 1, 'California'),
            new States(3, 1, 'Colorado'),
            new States(4, 1, 'Florida'),
            new States(5, 1, 'Kansas'),
            new States(6, 1, 'Maryland'),
            new States(7, 1, 'Oregon'),
            new States(8, 1, 'Texas'),
            new States(9, 1, 'Washington'),
            new States(10, 2, 'New South Wales'),
            new States(11, 2, 'South Australia'),
            new States(12, 2, 'Tasmania'),
            new States(13, 2, 'Victoria'),
            new States(14, 2, 'Western Australia')];
   }
}
