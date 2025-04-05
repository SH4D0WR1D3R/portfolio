import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-theatre',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './theatre.component.html',
  styleUrl: './theatre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TheatreComponent {

}
