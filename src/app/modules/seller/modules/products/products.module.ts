import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//Angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //angular material modules
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
