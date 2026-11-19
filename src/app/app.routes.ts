import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro';

export const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: '', redirectTo: '/registro', pathMatch: 'full' }
];