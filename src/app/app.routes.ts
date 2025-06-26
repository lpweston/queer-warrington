import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrideComponent } from './pride/pride.component';
import { ZineShowcaseComponent } from './zine-showcase/zine-showcase.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pride', component: PrideComponent},
    { path: 'zines', component: ZineShowcaseComponent},
    { path: '**', component: HomeComponent }
  ];