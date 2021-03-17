import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor( public firebaseAuth:AngularFireAuth ) { }

  async signIn(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).
    then( res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user))
    } )
  }

  async signUp(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).
    then( res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user))
    } );
  }

  onLoginGoogle() {
    return this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    });
  }

  onLoginFacebook() : any {
    return this.firebaseAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((result) => {
      console.log('You have been successfully logged in!')
  }).catch((error) => {
      console.log(error)
  });
  }

  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user')
  }



}
