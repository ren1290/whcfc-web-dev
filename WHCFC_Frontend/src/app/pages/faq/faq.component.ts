import { Component } from '@angular/core';
import { FaqHeadingComponent } from '../../components/faq/faq-heading/faq-heading.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqHeadingComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

}
