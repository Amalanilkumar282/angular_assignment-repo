import { Component, signal } from '@angular/core';
import { BacklogContainerComponent } from "../components/backlog-container/backlog-container";
import { SprintContainerComponent } from "../components/sprint-container/sprint-container";

import {Navbar} from '../components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BacklogContainerComponent, SprintContainerComponent, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular_assignment-repo');
}
