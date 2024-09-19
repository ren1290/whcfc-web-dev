import { Component } from '@angular/core';
import { FaqHeadingComponent } from '../../components/faq/faq-heading/faq-heading.component';
import { FaqCoreComponent } from '../../components/faq/faq-core/faq-core.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqHeadingComponent, FaqCoreComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

}
