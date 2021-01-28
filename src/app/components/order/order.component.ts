import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Order} from '../../shared/interfaces';
import {OrderService} from '../../shared/services/order.service';
import {Countries} from '../../shared/services/Countries';
import {States} from '../../shared/services/States';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  contries: Countries[];
  states: States[];
  selectedCountry: Countries = new Countries(1, 'USA');

  constructor(private  router: Router,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      firstName: new FormControl(null, [
        Validators.required
      ]),
      lastName: new FormControl(null, [
        Validators.required
      ]),
      address: new FormControl(null, [
        Validators.required
      ]),
      apartment: new FormControl(null, [
        Validators.required
      ]),
      city: new FormControl(null, [
        Validators.required
      ]),
      country: new FormControl(null, [
        Validators.required
      ]),
      state: new FormControl(null, [
        Validators.required
      ]),
      zipcode: new FormControl(null, [
        Validators.required
      ]),
      phone: new FormControl(null, [
        Validators.required
      ])
    });
    this.contries = this.orderService.getCountries();
    this.Submit(this.selectedCountry.id);
  }

  Submit(countryId: number){
    console.log(this.orderForm);
    if (this.orderForm.invalid){
      return;
    }
    const order: Order = {
      password: this.orderForm.value.password,
      firstName: this.orderForm.value.firstName,
      lastName: this.orderForm.value.lastName,
      address: this.orderForm.value.address,
      apartment: this.orderForm.value.apartment,
      city: this.orderForm.value.city,
      country: this.orderForm.value.country,
      state: this.orderForm.value.state,
      zipcode: this.orderForm.value.zipcode,
      phone: this.orderForm.value.phone
    };
    this.states = this.orderService.getStates().filter((item) =>
      // tslint:disable-next-line:triple-equals
      item.countryId == countryId );
    this.router.navigate(['']);
  }


}
