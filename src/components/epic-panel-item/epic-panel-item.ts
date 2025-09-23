import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-epic-panel-item',
  imports: [],
  templateUrl: './epic-panel-item.html',
  styleUrl: './epic-panel-item.css'
})
export class EpicPanelItem {
    @Input() title = '';
    @Input() progress = 0;
    @Input() startDate = '';
    @Input() dueDate = '';
}