import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClothesService } from 'src/app/shared/services/clothes.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  formularioForm: FormGroup;
  formSubs: Subscription;
  userLogged;
  clothes=['hoddies','jeans','poleras','Otros'];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: ClothesService,

  ) {}

  onCreate(){
    this.service.setClotheType(this.formularioForm.value.clothe);
    this.formularioForm.value.ownerId = this.userLogged.uid;
    console.log('Form group: ',this.formularioForm.value);
    console.log("User", this.userLogged);
    this.formSubs = this.service.add({ ...this.formularioForm.value})
      .subscribe(
        res => {console.log('Resp:', res)},
        err => { console.log('Error de servidor', err) }
      );
  }
  
  ngOnInit() {
    this.userLogged = JSON.parse(localStorage.getItem('user'));
    this.formularioForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      talla: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      image_Url:"",
      ownerId:"",
      clothe:"",
      quantity:"",
      available:"",
    });
  }

  ngOnDestroy() {
    this.formSubs ? this.formSubs.unsubscribe() : "";
  }

}

