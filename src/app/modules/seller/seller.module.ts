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
import { ProductsModule } from './modules/products/products.module';
import { OfferModule } from './modules/offer/offer.module';



const routes: Routes = [
  { path: '', component: SellerComponent,
children: [
  { path: "", redirectTo: "homeSeller", pathMatch: "full" },
  {
    path: "homeSeller",
    loadChildren: () =>
      import("./modules/products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "offerSeller",
    loadChildren: () =>
      import("./modules/offer/offer.module").then(
        m => m.OfferModule
      )
  },
    ]
  }
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
