import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Issue } from '../../services/issue.service';
import { IssueView } from '../issue-view/issue-view';

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [CommonModule, IssueView],
  templateUrl: './issue-list.html',
  styleUrl: './issue-list.css',
})
export class IssueList {
  @Input() issues: Issue[] = [];
  isModalOpen = false;
  selectedIssue: Issue | null = null;

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High':
        return 'priority-high';
      case 'Medium':
        return 'priority-medium';
      case 'Low':
        return 'priority-low';
      default:
        return '';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'To Do':
        return 'status-todo';
      case 'In Progress':
        return 'status-progress';
      case 'Done':
        return 'status-done';
      default:
        return '';
    }
  }

  openModal(issue: Issue) {
    this.selectedIssue = issue;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedIssue = null;
  }
}
