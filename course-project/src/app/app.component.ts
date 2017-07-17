import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDoPUOaVjI6pEbDCi3B8B5S50To5KaPypo',
      authDomain: 'ng-recipe-book-b38e0.firebaseapp.com'
    })

    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.authService.getToken();
        } else {
          this.authService.token = null;
        }
      }
    );
  }
}
