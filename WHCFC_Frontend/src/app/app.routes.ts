import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'volunteer', component: VolunteerComponent}
];
