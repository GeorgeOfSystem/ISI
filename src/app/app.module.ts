import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ClothesService } from './shared/services/clothes.service';

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  {
    path: "",
    loadChildren: () =>
      import("./modules/home/home.module").then(m => m.HomeModule)
  }, 
  {
    path: "login",
    loadChildren: () =>
      import("./modules/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "seller",
    loadChildren: () =>
      import("./modules/seller/seller.module").then(m => m.SellerModule)
  },/*
  {
    path: "profile",
    loadChildren: () =>
      import("./modules/profile/profile.module").then(m => m.ProfileModule)
  }*/
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //    AngularFireDatabaseModule 
  ],
  providers: [
    AuthService,
    ClothesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
