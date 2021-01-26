import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Order} from '../../shared/interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;

  constructor(private  router: Router) { }

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
  }

  Submit(){
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
    this.router.navigate(['']);
  }
}
