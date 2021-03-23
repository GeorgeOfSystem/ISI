import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignedIn: Boolean;
  userForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private auth : AuthService, private router : Router) { }

  ngOnInit() : void {
    this.userForm = this.formBuilder.group({
      email:[ '', Validators.required ],
      password:[ '', Validators.required ]
    });

    //Current User verification
    /*if(localStorage.getItem('user')!= null){
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }*/
  }

  async onRegister() {
    console.log('New user', this.userForm.value)
    await this.auth.signUp(this.userForm.value.email,this.userForm.value.password);
    if(this.auth.isLoggedIn){
      //this.isSignedIn = true;
      this.redirect();
    }
  }

  async onLoginEmail() {
    console.log('user', this.userForm.value)
    await this.auth.signIn(this.userForm.value.email,this.userForm.value.password);
    if(this.auth.isLoggedIn){
      //this.isSignedIn = true;
      this.redirect();
    }
  }
  
  onloginGoogle() {
    this.auth.onLoginGoogle().then(res => {
      this.redirect();
    }).catch(err => console.log('Error', err));
  }
  onloginFacebook() {
    this.auth.onLoginFacebook().then(res => {
      this.redirect();
    }).catch(err => console.log('Error', err));
  }

  redirect() : void {
    console.log(localStorage.getItem('user'));
    this.router.navigate(['/home']);
  }
}
