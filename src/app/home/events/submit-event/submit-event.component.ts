import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-submit-event',
  standalone: true,
  imports: [MatCardModule, FormsModule],
  templateUrl: './submit-event.component.html',
  styleUrl: './submit-event.component.scss'
})
export class SubmitEventComponent {

}
