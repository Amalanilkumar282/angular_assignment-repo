import { Component, signal } from '@angular/core';
import { BacklogContainerComponent } from '../components/backlog-container/backlog-container';
import { SprintContainerComponent } from '../components/sprint-container/sprint-container';

import { CreateEpic } from '../components/create-epic/create-epic';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BacklogContainerComponent, SprintContainerComponent, CreateEpic, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular_assignment-repo');

  showCreateEpic = false;

  openCreateEpic() {
    this.showCreateEpic = true;
    console.log('Create Epic button clicked');
  }

  closeCreateEpic() {
    this.showCreateEpic = false;
    console.log('Create Epic modal closed');
  }
}
//kiran
