import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-backlog-container',
  standalone: true,
  imports: [NgIf],
  templateUrl: './backlog-container.html',
  styleUrls: ['./backlog-container.css']
})
export class BacklogContainerComponent {

  workItemsCount: number = 0; // Initialize with 0 for the empty state

  constructor() { }

  /**
   * Handles the "Create sprint" button click.
   * Add your logic here, e.g., opening a modal or navigating.
   */
  onCreateSprint(): void {
    console.log('Create sprint button clicked!');
  }

  /**
   * Handles the "Create" button click in the footer.
   * Add logic to create a new work item.
   */
  onCreateWorkItem(): void {
    console.log('Create work item button clicked!');
    // Example: this.workItemsCount++;
  }
}