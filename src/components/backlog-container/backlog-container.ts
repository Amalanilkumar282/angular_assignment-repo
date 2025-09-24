import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { IssueService, Issue } from '../../services/issue.service';
import { IssueList } from '../issue-list/issue-list';

@Component({
  selector: 'app-backlog-container',
  standalone: true,
  imports: [NgIf, IssueList],
  templateUrl: './backlog-container.html',
  styleUrls: ['./backlog-container.css']
})
export class BacklogContainerComponent implements OnInit {

  workItemsCount: number = 0;
  backlogIssues: Issue[] = [];

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.loadBacklogIssues();
  }

  private loadBacklogIssues(): void {
    this.backlogIssues = this.issueService.getBacklogIssues();
    this.workItemsCount = this.backlogIssues.length;
  }

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