import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Issue } from '../../services/issue.service';
import { FormsModule } from '@angular/forms';

interface EpicDetails {
  name: string;
  progress: number;
  startDate: string;
  dueDate: string;
  status: string;
  assignee: string;
  description: string;
}

@Component({
  selector: 'app-epic-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './epic-view.html',
  styleUrls: ['./epic-view.css']
})
export class EpicView {
  @Input() issue: Issue | null = null;
  @Input() isModalOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  // Epic details window properties
  showEpicDetails: boolean = false;
  epicDetails: EpicDetails = {
    name: 'User Authentication System',
    progress: 75,
    startDate: 'August 15, 2025',
    dueDate: 'September 30, 2025',
    status: 'In Progress',
    assignee: 'John Doe',
    description: 'Complete user authentication system with login, registration, password reset, and user profile management features.'
  };

  onDelete() {
    console.log('Deleted product:', this.issue);
    this.closeModal.emit();
  }

  onEdit() {
    console.log('Editing product:', this.issue);
    // Show epic details window when edit is clicked
    this.showEpicDetails = true;
  }

  handleClose() {
    this.closeModal.emit();
  }

  // Epic details window methods
  closeEpicDetails() {
    this.showEpicDetails = false;
  }

  viewFullDetails() {
    console.log('Viewing full epic details:', this.epicDetails);
    // You can emit an event or navigate to full details view
    this.closeEpicDetails();
  }

  editEpic() {
    console.log('Editing epic:', this.epicDetails);
    // Implement edit epic logic here
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'done':
      case 'completed':
        return 'is-success';
      case 'in progress':
        return 'is-info';
      case 'to do':
      case 'pending':
        return 'is-warning';
      case 'blocked':
        return 'is-danger';
      default:
        return 'is-light';
    }
  }

  // Method to show epic details (you can call this from parent component)
  showEpicDetailsWindow() {
    this.showEpicDetails = true;
  }
}