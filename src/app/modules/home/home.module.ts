import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ClothesService } from 'src/app/shared/services/clothes.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'clothes', component: ClothesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ],
  declarations: [HomeComponent,WelcomeComponent,ClothesComponent,ProfileComponent],
  providers:[ClothesService]
})
export class HomeModule { }
