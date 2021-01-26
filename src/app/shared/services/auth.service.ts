import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthResponse, User} from '../interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(user: User): Observable<any>{
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user);
  }
  logOut(){ }
}
