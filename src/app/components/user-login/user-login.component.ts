import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  userLogin() {
    if (this.loginForm.invalid){
      return;
    }
    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    // this.auth.logIn(user).subscribe( () => {
    //   this.loginForm.reset();
    //   this.router.navigate(['/shopping-card']);
    // });
  }
}
