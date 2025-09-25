import { Component, ViewChild } from '@angular/core';
import { EpicPanelItem } from '../epic-panel-item/epic-panel-item';
import { EpicView } from '../epic-view/epic-view';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-epic-panel',
  imports: [EpicPanelItem, EpicView, NgFor, NgIf],
  templateUrl: './epic-panel.html',
  styleUrl: './epic-panel.css'
})
export class EpicPanel {
  @ViewChild(EpicView) epicViewComponent!: EpicView;
  
  isCreateClicked = false;
  
  epics = [
    {
      title: 'Photo Gallery',
      progress: 50,
      startDate: 'August 12,2025',
      dueDate: 'August 14, 2025'
    },
    {
      title: 'Admin Dashboard',
      progress: 80,
      startDate: 'August 12,2025',
      dueDate: 'August 15, 2025'
    },
    {
      title: 'Login',
      progress: 0,
      startDate: 'September 4,2025',
      dueDate: 'September 8,2025'
    }
  ]

  onCreateClick(){
    this.isCreateClicked = !this.isCreateClicked;
  }

  onEpicViewDetails(epicData: {title: string, progress: number, startDate: string, dueDate: string}) {
    // Update the epic details in the epic-view component
    this.epicViewComponent.epicDetails = {
      name: epicData.title,
      progress: epicData.progress,
      startDate: epicData.startDate,
      dueDate: epicData.dueDate,
      status: this.getStatusFromProgress(epicData.progress),
      assignee: 'John Doe', // You can make this dynamic
      description: `Epic for ${epicData.title} with various tasks and requirements.`
    };
    
    // Show the corner window
    this.epicViewComponent.showEpicDetailsWindow();
  }

  onCloseModal() {
    // Handle modal close if needed
  }

  private getStatusFromProgress(progress: number): string {
    if (progress === 0) return 'To Do';
    if (progress === 100) return 'Done';
    return 'In Progress';
  }
}