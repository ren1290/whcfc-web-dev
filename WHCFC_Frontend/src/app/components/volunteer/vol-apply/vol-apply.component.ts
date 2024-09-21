import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VolApplyInfoService } from '../../../vol-apply-info.service';

@Component({
  selector: 'app-vol-apply',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vol-apply.component.html',
  styleUrl: './vol-apply.component.css'
})
export class VolApplyComponent {
  volApplyInfo = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    category: '',
    message: ''
  };

  constructor(private volService: VolApplyInfoService) {}

  onSubmit() {
    this.volService.sendContactForm(this.volService).subscribe(response => {
      console.log('Form submitted successfully', response);
    }, error => {
      console.log('Error sending message.', error);
    }
  );
  }
}
