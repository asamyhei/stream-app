import {Routes} from '@angular/router';
import {ForbiddenComponent} from './core/forbidden/forbidden.component';
import {NotFoundComponent} from './core/not-found/not-found.component';

export const AppRoutes: Routes = [
  {path: '403', component: ForbiddenComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
  {path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
