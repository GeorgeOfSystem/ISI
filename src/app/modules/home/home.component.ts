import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClothesService } from 'src/app/shared/services/clothes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clotheTypeNavbar: string;
  /*
  page = fale -> show welcome component
  page = true -> show clothes component
  */
  clothes = false;

  constructor( private router: Router, private clothesService: ClothesService ) { }

  ngOnInit() {
  }

  clotheSection(type: string){
    this.clotheTypeNavbar = type;
    this.clothes = true;
    console.log('tipo',type);
  }

  loginSection() {
    this.router.navigate(['login']);
    console.log("Success");
    console.log('tipo',this.clotheTypeNavbar);
  }

}
