import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpicPanel } from '../components/epic-panel/epic-panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EpicPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_assignment-repo');
}
