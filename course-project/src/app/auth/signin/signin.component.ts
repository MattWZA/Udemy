import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  msg = '';
  error = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.error = '';
    this.msg = '';
    this.authService.signinUser(email, password)
      .then(
        () => {
          this.msg = 'Login successful';
          form.reset();
        }
      )
      .catch(
        (error: any) => {
          if (error['message']) {
            this.error = error.message;
          } else {
            this.error = 'Something went wrong';
          }
        }
      )
  }

}
