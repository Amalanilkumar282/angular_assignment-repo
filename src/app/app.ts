import { Component, signal } from '@angular/core';
import { BacklogContainerComponent } from "../components/backlog-container/backlog-container";
import { SprintContainerComponent } from "../components/sprint-container/sprint-container";

import { StoryPopup } from '../components/story-popup/story-popup';  
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BacklogContainerComponent, SprintContainerComponent, StoryPopup,NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular_assignment-repo');
   showPopup = false;
}
