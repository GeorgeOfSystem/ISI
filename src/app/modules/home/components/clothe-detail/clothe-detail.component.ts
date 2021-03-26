import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './clothe-detail.component.html',
  styleUrls: ['./clothe-detail.component.scss']
})
export class ClotheDetailComponent implements OnInit {
  isSignedIn: Boolean;
  userLogged;

  pageType = "welcome";


  constructor() { }

  ngOnInit() {
  }
  clotheSection(type: string){
    this.pageType = 'clothes';
    console.log('tipo',type);
  }
}
