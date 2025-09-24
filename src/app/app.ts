import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpicPanel } from '../components/epic-panel/epic-panel';
import { BacklogContainerComponent } from '../components/backlog-container/backlog-container';
import { SprintContainerComponent } from '../components/sprint-container/sprint-container';

import { CreateEpic } from '../components/create-epic/create-epic';
import { NgIf } from '@angular/common';
import { StoryPopup } from '../components/story-popup/story-popup';  
import {Navbar} from '../components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BacklogContainerComponent, SprintContainerComponent, CreateEpic, EpicPanel, NgIf, StoryPopup,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular_assignment-repo');
   showPopup = false;

  showCreateEpic = false;

  openCreateEpic() {
    this.showCreateEpic = true;
    console.log('Create Epic button clicked');
  }

  closeCreateEpic() {
    this.showCreateEpic = false;
    console.log('Create Epic modal closed');
  }
  showStoryPopup = false;

  openStoryPopup() {
    this.showStoryPopup = true;
  }

  closeStoryPopup() {
    this.showStoryPopup = false;
  }
}
//kiran
