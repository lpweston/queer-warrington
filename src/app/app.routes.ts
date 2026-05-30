import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Pride2025Component } from './pride2025/pride.component';
import { ZineShowcaseComponent } from './zine-showcase/zine-showcase.component';
import { Pride2026Component } from './pride2026/pride.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pride2025', component: Pride2025Component},
    { path: 'pride2026', component: Pride2026Component},
    { path: 'zines', component: ZineShowcaseComponent},
    { path: '**', component: HomeComponent }
  ];