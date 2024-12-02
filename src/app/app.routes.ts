import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrideComponent } from './pride/pride.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pride', component: PrideComponent},
    { path: '**', component: HomeComponent }
  ];