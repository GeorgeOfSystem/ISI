import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ClothesService } from 'src/app/shared/services/clothes.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { MatButtonModule } from '@angular/material/button';
import { ClotheDetailComponent } from './components/clothe-detail/clothe-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'clothes', component: ClothesComponent},
  { path: 'detail', component: ClotheDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ],
  declarations: [HomeComponent,WelcomeComponent,ClothesComponent,ClotheDetailComponent],
  providers:[ClothesService]
})
export class HomeModule { }
