import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(username: string, password: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(username + ":" + password)
      }),
      responseType: 'text' as const
    };

    return this.http.post('/auth/login', null, httpOptions);
  }
}
