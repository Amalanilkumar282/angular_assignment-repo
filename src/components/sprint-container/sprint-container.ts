import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { IssueService, Issue } from '../../services/issue.service';
import { IssueList } from '../issue-list/issue-list';

@Component({
  selector: 'app-sprint-container',
  standalone: true,
  imports: [NgIf, IssueList],
  templateUrl: './sprint-container.html',
  styleUrls: ['./sprint-container.css']
})
export class SprintContainerComponent implements OnInit {

  workItemsCount: number = 0;
  sprintIssues: Issue[] = [];

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.loadSprintIssues();
  }

  private loadSprintIssues(): void {
    this.sprintIssues = this.issueService.getSprintIssues();
    this.workItemsCount = this.sprintIssues.length;
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