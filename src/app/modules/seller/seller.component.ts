import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ClothesService } from 'src/app/shared/services/clothes.service';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit, OnDestroy {
  isSignedIn: Boolean;
  userLogged;


  constructor( private auth : AuthService, private router: Router ) {}


  ngOnInit() {
    if(localStorage.getItem('user')!= null){
      this.isSignedIn = true;
      this.userLogged = JSON.parse(localStorage.getItem('user'));
      console.log("url",this.userLogged);
    } else {
      this.isSignedIn = false;
    }
  }

  ngOnDestroy() {

  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/home']);
  }

}
