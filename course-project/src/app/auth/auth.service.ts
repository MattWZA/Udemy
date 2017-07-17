import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  // ngOnInit() {
  //   firebase.auth().onAuthStateChanged(
  //     (user) => {
  //       console.log('onAuthStateChanged', user);
  //       if (user) {
  //         this.getToken();
  //       } else {
  //         this.token = null;
  //       }
  //     }
  //   );
  // }

  signupUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signinUser(email: string, password: string) {
    const p = firebase.auth().signInWithEmailAndPassword(email, password);
    p.then(
      () => {
          this.router.navigate(['./']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token) => {
                this.token = token;
              }
            )
        }
      )
    return p;
  }

  logout() {
    firebase.auth().signOut().then(
      () => {
        this.router.navigate(['./auth', 'signin']);
      }
    );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
