import { ToastersService } from "./toasters.service";
import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Router } from "@angular/router";

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

@Injectable({
  providedIn: "root",
})
export class NgAuthService {
  userState: any;
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private toaster: ToastersService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userState = user;
        sessionStorage.setItem("user", JSON.stringify(this.userState));
        JSON.parse(sessionStorage.getItem("user"));
      } else {
        sessionStorage.setItem("user", null);
        JSON.parse(sessionStorage.getItem("user"));
      }
    });
  }

  // Case Login with Email + Password
  SignIn(email, password) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(["home"]);
          this.toaster.Success("Welcome Back");
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        this.toaster.Error(error.message);
      });
  }

  // Return True If User is Logged In
  get isLoggedIn(): boolean {
    const user = JSON.parse(sessionStorage.getItem("user"));
    return (user !== null) !== false ? true : false;
  }

  // Logout
  Logout() {
    this.afAuth.signOut().then(() => {
      sessionStorage.removeItem("user");
      this.router.navigate(["auth"]);
    });
  }
  // Set User Data
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    return userRef.set(userState, {
      merge: true,
    });
  }
  async UpdateProfile(user) {
    const profile = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.img,
    };
    return (await this.afAuth.currentUser).updateProfile(profile);
  }
}
