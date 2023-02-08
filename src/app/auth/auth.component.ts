import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public loginMessage: string;
  public isLoggedIn = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.logout();
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    this.authService.login(username, password).subscribe(
      response => {
        localStorage.setItem('currentUser', response)
        this.loginMessage = 'You are now Logged In!'
        this.isLoggedIn = true;
      },
      error => {
        console.log(error);
        this.loginMessage = 'There was an error during login!'
        this.isLoggedIn = false;
      });

    form.reset();
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loginMessage = ''
    this.isLoggedIn = false;
  }

}
