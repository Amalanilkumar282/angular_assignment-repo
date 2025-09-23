import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-issue-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './issue-view.html',
  styleUrl: './issue-view.css',
})
export class IssueView {
  isModalOpen = false;

  issue = {
    title: 'Sample Task 1',
    description: 'This is a dummy description of the issue. It explains the context and details.',
    assignee: 'Anita A',
    priority: 'Medium',
    status: 'In Progress',
    dueDate: new Date('2025-09-26'),
    sprint: 'SCRUM Sprint 1',
    storyPoints: 5,
    subtasks: [
      { title: 'Design UI for login page', status: 'Done' },
      { title: 'Integrate API for login', status: 'In Progress' },
      { title: 'Write unit tests', status: 'To Do' },
    ],
    connectedItems: [
      { key: 'SCRUM-9', type: 'Story' },
      { key: 'SCRUM-10', type: 'Bug' },
    ],
    comments: [
      { author: 'John D', text: 'Started working on this task today.' },
      { author: 'Sara P', text: 'API contract needs to be finalized.' },
    ],
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onDelete() {
    console.log('Deleted product:', this.issue);
    this.closeModal();
  }

  onEdit() {
    console.log('Editing product:', this.issue);
    // Implement edit logic here
  }
}
