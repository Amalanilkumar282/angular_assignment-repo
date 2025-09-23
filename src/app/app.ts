import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoryPopup } from '../components/story-popup/story-popup';  
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StoryPopup,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_assignment-repo');
   showPopup = false;
}
