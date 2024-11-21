import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GroupsComponent } from './groups/groups.component';
import { EventsComponent } from "../events/events.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    GroupsComponent,
    EventsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}