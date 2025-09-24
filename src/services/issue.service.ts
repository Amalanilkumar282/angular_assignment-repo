import { Injectable } from '@angular/core';

export interface Issue {
  id: number;
  title: string;
  description: string;
  assignee: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'To Do' | 'In Progress' | 'Done';
  dueDate: Date;
  sprint: string;
  storyPoints: number;
}

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issues: Issue[] = [
    {
      id: 1,
      title: 'Sample Task 1',
      description: 'This is a dummy description of the issue. It explains the context and details.',
      assignee: 'Anita A',
      priority: 'Medium',
      status: 'In Progress',
      dueDate: new Date('2025-09-26'),
      sprint: 'SCRUM Sprint 1',
      storyPoints: 5,
    },
    {
      id: 2,
      title: 'Sample Task 2',
      description: 'Implement user registration and validation.',
      assignee: 'Brian K',
      priority: 'High',
      status: 'To Do',
      dueDate: new Date('2025-09-28'),
      sprint: 'SCRUM Sprint 2',
      storyPoints: 8,
    },
    {
      id: 3,
      title: 'Sample Task 3',
      description: 'Fix bug in password reset flow.',
      assignee: 'Sara P',
      priority: 'Low',
      status: 'Done',
      dueDate: new Date('2025-09-25'),
      sprint: 'SCRUM Sprint 1',
      storyPoints: 3,
    },
    {
      id: 4,
      title: 'Sample Task 4',
      description: 'Write documentation for deployment process.',
      assignee: 'John D',
      priority: 'Medium',
      status: 'In Progress',
      dueDate: new Date('2025-09-30'),
      sprint: 'SCRUM Sprint 3',
      storyPoints: 2,
    },
  ];

  getAllIssues(): Issue[] {
    return this.issues;
  }

  getIssuesBySprint(sprintName: string): Issue[] {
    return this.issues.filter(issue => issue.sprint === sprintName);
  }

  getBacklogIssues(): Issue[] {
    // Return issues that are "To Do" status (typically backlog items)
    return this.issues.filter(issue => 
      issue.status === 'To Do'
    );
  }

  getSprintIssues(): Issue[] {
    // Return issues that are in progress or done (typically in active sprint)
    return this.issues.filter(issue => 
      issue.status === 'In Progress' || issue.status === 'Done'
    );
  }
}