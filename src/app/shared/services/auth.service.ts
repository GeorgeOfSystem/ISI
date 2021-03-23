import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor( public firebaseAuth:AngularFireAuth ) { }

  async signIn(email, password){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).
    then( res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
      console.log('You have been successfully logged in!');
    } )
  }

  async signUp(email, password){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).
    then( res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
      console.log('You have been successfully logged in!');
    } );
  }

  onLoginGoogle() {
    return this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
        this.isLoggedIn = true;
        localStorage.setItem('user',JSON.stringify(result.user));
        console.log('You have been successfully logged in!');
        
    }).catch((error) => {
        console.log(error)
    });
  }

  onLoginFacebook() {
    return this.firebaseAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((result) => {
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(result.user));
      console.log('You have been successfully logged in!');
  }).catch((error) => {
      console.log(error)
  });
  }

  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }



}
