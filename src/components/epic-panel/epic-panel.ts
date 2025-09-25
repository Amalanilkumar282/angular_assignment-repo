import { Component } from '@angular/core';
import { EpicPanelItem } from '../epic-panel-item/epic-panel-item';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-epic-panel',
  imports: [EpicPanelItem,NgFor,NgIf],
  templateUrl: './epic-panel.html',
  styleUrl: './epic-panel.css'
})
export class EpicPanel {
  isCreateClicked = false;
  newEpic = '';
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
      progress: 100,
      startDate: 'September 4,2025',
      dueDate: 'September 8,2025'
    }
  ]

  onCreateClick(){
    this.isCreateClicked = !this.isCreateClicked;
  }
  onInput(event: Event){
    var value = (event.target as HTMLInputElement).value;
    this.newEpic = value;
  }
  onInputEnter(){
    const newEpicObject = {
      title: this.newEpic,
      progress:0,
      startDate: 'None',
      dueDate: 'None'
    }
    this.epics.push(newEpicObject);
    // console.log(this.epics);
  }
};

