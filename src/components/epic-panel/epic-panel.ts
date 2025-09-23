import { Component } from '@angular/core';
import { EpicPanelItem } from '../epic-panel-item/epic-panel-item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-epic-panel',
  imports: [EpicPanelItem,NgFor],
  templateUrl: './epic-panel.html',
  styleUrl: './epic-panel.css'
})
export class EpicPanel {
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
};

