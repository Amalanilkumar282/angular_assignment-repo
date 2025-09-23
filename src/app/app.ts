import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateEpic } from '../components/create-epic/create-epic';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateEpic, NgIf],
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
