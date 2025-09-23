import { Component, signal } from '@angular/core';
import { BacklogContainerComponent } from "../components/backlog-container/backlog-container";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BacklogContainerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular_assignment-repo');
}
