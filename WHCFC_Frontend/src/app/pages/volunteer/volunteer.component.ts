import { Component } from '@angular/core';
import { VolHeadingComponent } from '../../components/volunteer/vol-heading/vol-heading.component';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [VolHeadingComponent],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {

}
