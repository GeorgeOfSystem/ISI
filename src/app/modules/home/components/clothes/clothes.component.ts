import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClothesService } from 'src/app/shared/services/clothes.service';
import { HomeComponent } from '../../home.component';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['../../home.component.scss']
})
export class ClothesComponent implements OnInit, OnDestroy, OnChanges {
  clothes=[];
  clothesSubs: Subscription;

  @Input()
  clotheType : string;

  constructor(private router:Router ,private service: ClothesService, private home: HomeComponent) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.unSusbcribe();
    this.getClothes();
  }

  
  ngOnDestroy(): void{
    this.unSusbcribe();
    this.home.clothes=false;
  }

  getClothes(): void{
    this.service.setClotheType(this.clotheType);
    this.clothesSubs = this.service.get().subscribe(res => {
      Object.entries(res).map(p => this.clothes.push(p[1]));
    });
  }

  unSusbcribe(): void{
    this.clothesSubs ? this.clothesSubs.unsubscribe():'';
  }


}
