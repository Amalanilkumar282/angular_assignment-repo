import { Component, Output, EventEmitter } from '@angular/core';

interface Epic {
  summary: string;
  description: string;
  status: string;
  assignee: string;
  startDate: string;
  dueDate: string;
  team: string;
}

@Component({
  selector: 'app-create-epic',
  imports: [],
  templateUrl: './create-epic.html',
  styleUrl: './create-epic.css',
})
export class CreateEpic {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit(); // parent sets showCreateEpic = false
  }
}
