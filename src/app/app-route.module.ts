import { Routes, RouterModule } from '@angular/router';

import { RouteComponent } from './route/route.component';
import { HomeComponent } from './home/home.component';
import { PruebaComponent } from './route/prueba.component';

const appRoutes = [
  { path: 'route/:id', component: RouteComponent, },
  { path: 'home', component: HomeComponent },
  { path: 'prueba/:id', component: PruebaComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
export const route = RouterModule.forRoot(appRoutes);
