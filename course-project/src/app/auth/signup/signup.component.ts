import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg = '';
  error = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.error = '';
    this.msg = '';
    this.authService.signupUser(email, password)
      .then(
        () => {
          this.msg = 'Signup successful';
          form.reset();
        },
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
