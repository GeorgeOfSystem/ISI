import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ClothesService } from 'src/app/shared/services/clothes.service';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit, OnDestroy, OnChanges {
  poleras=[];
  hoodies=[];
  jeans=[];
  clothes = [];
  polerasSubs: Subscription;
  hoodiesSubs: Subscription;
  jeansSubs: Subscription;
  userLogged;


  @Input()
  clotheType : string;

  constructor(private router:Router ,private service: ClothesService) { }

  ngOnInit(): void {
    this.userLogged = JSON.parse(localStorage.getItem('user'));
    console.log("Hola");
    this.getJeans();
  }

  ngOnChanges(): void{
    this.unSusbcribe();
    this.jeans = [];
    this.hoodies =[];
    this.poleras =[];
    this.clothes = [];
  }


  ngOnDestroy(): void{
    this.unSusbcribe();
  }

  getJeans(): void{
    this.service.setClotheType("jeans");
    console.log(this.userLogged.uid);
    this.jeansSubs = this.service.getById(this.userLogged.uid).subscribe(res => {
      Object.entries(res).map(p => this.jeans.push(p[1]));
      this.clothes=this.jeans;
      console.log("Arreglo",this.clothes);
    });
    this.getPoleras();
  }

  async getPoleras(){
    this.service.setClotheType("poleras");
    this.polerasSubs = this.service.getById(this.userLogged.uid).subscribe(res => {
      Object.entries(res).map(p => this.jeans.push(p[1]));
      this.clothes.concat(this.poleras);
      console.log("Arreglo",this.clothes);
    });
    this.getHoodies();
  }

  async getHoodies(){
    this.service.setClotheType("hoddies");
    this.hoodiesSubs = this.service.getById(this.userLogged.uid).subscribe(res => {
      Object.entries(res).map(p => this.jeans.push(p[1]));
      this.clothes.concat(this.hoodies);
      console.log("Arreglo",this.clothes);
    });
  }

  unSusbcribe(): void{
    this.jeansSubs ? this.jeansSubs.unsubscribe():'';
    this.hoodiesSubs ? this.hoodiesSubs.unsubscribe():'';
    this.polerasSubs ? this.polerasSubs.unsubscribe():'';
  }


}
