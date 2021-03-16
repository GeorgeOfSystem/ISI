import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ClothesService } from 'src/app/shared/services/clothes.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ClothesComponent } from './components/clothes/clothes.component';

const routes: Routes = [
  { path: "", redirectTo: "home2", pathMatch: "full" },
  { path: 'home2', component: HomeComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'clothes', component: ClothesComponent},
  /*{
    path: "welcome",
    loadChildren: () =>
      import("./modules/welcome/welcome.module").then(m => m.WelcomeModule)
  }, 
  {
    path: "clothes",
    loadChildren: () =>
      import("./modules/clothes/clothes.module").then(m => m.ClothesModule)
  }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent,WelcomeComponent,ClothesComponent],
  providers:[ClothesService]
})
export class HomeModule { }
