import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subscriptionForm: NgForm;
  subscriptionTypes = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = this.subscriptionTypes[1];
  submitted = false;
  userData = {
    email: '',
    subscriptionType: '',
    password: ''
  }

  onSubmit() {
    console.log(this.subscriptionForm.value);

    this.userData = this.subscriptionForm.value;
    this.submitted = true;
    this.subscriptionForm.reset();
  }
}
