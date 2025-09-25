import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-epic-panel-item',
  imports: [NgIf],
  templateUrl: './epic-panel-item.html',
  styleUrl: './epic-panel-item.css'
})
export class EpicPanelItem {
  isDropDown = false;
  
  @Input() title = '';
  @Input() progress = 0;
  @Input() startDate = '';
  @Input() dueDate = '';
  
  @Output() viewDetails = new EventEmitter<{title: string, progress: number, startDate: string, dueDate: string}>();

  onDropDownClick(){
    this.isDropDown = !this.isDropDown;
    // console.log(this.isDropDown);
  }

  onViewDetails() {
    this.viewDetails.emit({
      title: this.title,
      progress: this.progress,
      startDate: this.startDate,
      dueDate: this.dueDate
    });
  }
}