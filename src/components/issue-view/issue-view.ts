import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Issue } from '../../services/issue.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-issue-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './issue-view.html',
  styleUrl: './issue-view.css',
})
export class IssueView {
  @Input() issue: Issue | null = null;
  @Input() isModalOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  onDelete() {
    console.log('Deleted product:', this.issue);
    this.closeModal.emit();
  }

  onEdit() {
    console.log('Editing product:', this.issue);
    // Implement edit logic here
  }

  handleClose() {
    this.closeModal.emit();
  }
}
