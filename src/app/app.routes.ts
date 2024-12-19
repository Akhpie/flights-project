import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './shared/guards/auth.guard';
import { adminGuard } from './shared/guards/admin.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights', component: FlightsComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent, canActivate: [adminGuard] },
];