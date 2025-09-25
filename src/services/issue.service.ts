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
  subtasks?: { title: string; status: 'To Do' | 'In Progress' | 'Done' }[];
  connectedItems?: { key: string; type: 'Story' | 'Bug' | 'Task' }[];
  comments?: { author: string; text: string }[];
}

@Injectable({
  providedIn: 'root',
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
      subtasks: [
        { title: 'Create registration form', status: 'To Do' },
        { title: 'Validate user input', status: 'To Do' },
      ],
      connectedItems: [{ key: 'SCRUM-12', type: 'Story' }],
      comments: [{ author: 'Brian K', text: 'Will start after login page is done.' }],
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
      subtasks: [
        { title: 'Identify bug source', status: 'Done' },
        { title: 'Patch backend API', status: 'Done' },
      ],
      connectedItems: [{ key: 'SCRUM-15', type: 'Bug' }],
      comments: [{ author: 'Sara P', text: 'Bug fixed and tested.' }],
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
      subtasks: [
        { title: 'Draft deployment steps', status: 'In Progress' },
        { title: 'Review with team', status: 'To Do' },
      ],
      connectedItems: [{ key: 'SCRUM-18', type: 'Task' }],
      comments: [{ author: 'John D', text: 'Drafting initial steps.' }],
    },
  ];

  getAllIssues(): Issue[] {
    return this.issues;
  }

  getIssuesBySprint(sprintName: string): Issue[] {
    return this.issues.filter((issue) => issue.sprint === sprintName);
  }

  getBacklogIssues(): Issue[] {
    // Return issues that are "To Do" status (typically backlog items)
    return this.issues.filter((issue) => issue.status === 'To Do');
  }

  getSprintIssues(): Issue[] {
    // Return issues that are in progress or done (typically in active sprint)
    return this.issues.filter((issue) => issue.status === 'In Progress' || issue.status === 'Done');
  }
}
