import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-epic-panel-item',
  imports: [NgIf],
  templateUrl: './epic-panel-item.html',
  styleUrl: './epic-panel-item.css'
})
export class EpicPanelItem {
  isDropDown = false;
  onDropDownClick(){
    this.isDropDown = !this.isDropDown;
    // console.log(this.isDropDown);
  }
    @Input() title = '';
    @Input() progress = 0;
    @Input() startDate = '';
    @Input() dueDate = '';
}