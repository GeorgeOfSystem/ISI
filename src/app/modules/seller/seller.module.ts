import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerComponent } from './seller.component';
import { RouterModule, Routes } from '@angular/router';

//Angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


const routes: Routes = [
  { path: '', component: SellerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    //angular material modules
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    
  ],
  declarations: [SellerComponent]
})
export class SellerModule { }
