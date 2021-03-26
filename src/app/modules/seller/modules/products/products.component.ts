import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClothesService } from 'src/app/shared/services/clothes.service';
import { Upload } from 'src/app/shared/services/upload';
import { UploadService } from 'src/app/shared/services/upload.service';


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
  selectedFiles: FileList;
  currentFileUpload: Upload;
  percentage: number;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: ClothesService,
    private uploadService: UploadService
  ) {}

  onCreate(){
    this.service.setClotheType(this.formularioForm.value.clothe);
    this.formularioForm.value.ownerId = this.userLogged.uid;
    this.upload();
    console.log('Form group: ',this.formularioForm.value);
    console.log("User", this.userLogged);
    this.formSubs = this.service.add({ ...this.formularioForm.value})
      .subscribe(
        res => {
          console.log('Resp:', res); 
          //this.router.navigate(['../offerSeller']);
        },
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

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.formularioForm.value.image_Url = localStorage.getItem('imageURL');

    this.currentFileUpload = new Upload(file);
    this.uploadService.uploadFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      }, err => {
        console.log(err);
      }
    );
  }

}

