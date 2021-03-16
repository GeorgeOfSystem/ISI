import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClothesService } from 'src/app/shared/services/clothes.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit, OnDestroy {
  formularioForm: FormGroup;
  formSubs: Subscription;
  type: Boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: ClothesService,
    
  ) {}

  onCreate(){
    //TODO make and imput for the type of clothe that will create
    this.service.setClotheType('jeans');
    console.log('Form group: ',this.formularioForm.value);
      this.formSubs = this.service.add({ ...this.formularioForm.value,
      ownerId:2
      }).subscribe(
      res => {console.log('Resp: ', res)}, err =>{
        console.log('Error de servidor')
      })
  }
  ngOnInit() {
    this.formularioForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      talla: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      image_Url:"",
      ownerId:"",
    });
  }

  ngOnDestroy() {
    this.formSubs ? this.formSubs.unsubscribe() : "";
  }
}
