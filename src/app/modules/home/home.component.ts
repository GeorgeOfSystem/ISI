import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ClothesService } from 'src/app/shared/services/clothes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clotheTypeNavbar: string;
  isSignedIn: Boolean;
  userLogged;
  
  pageType = "welcome";

  constructor( private router: Router, private clothesService: ClothesService, private auth : AuthService ) { }

  ngOnInit() {
    if(localStorage.getItem('user')!= null){
      this.isSignedIn = true;
      this.userLogged = JSON.parse(localStorage.getItem('user'));
    } else {
      this.isSignedIn = false;
    }
  }

  clotheSection(type: string){
    this.clotheTypeNavbar = type;
    this.pageType = 'clothes';
    console.log('tipo',type);
  }

}
