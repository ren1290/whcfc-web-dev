import { Component } from '@angular/core';
import { VolHeadingComponent } from '../../components/volunteer/vol-heading/vol-heading.component';
import { VolOpportunitiesComponent } from '../../components/volunteer/vol-opportunities/vol-opportunities.component';
import { VolTestimonialsComponent } from '../../components/volunteer/vol-testimonials/vol-testimonials.component';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [VolHeadingComponent, VolOpportunitiesComponent, VolTestimonialsComponent],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {

}
