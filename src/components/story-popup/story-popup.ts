import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-story-popup',
  imports: [],
  templateUrl: './story-popup.html',
  styleUrl: './story-popup.css'
})
export class StoryPopup {
   @Output() close = new EventEmitter<void>();
   closePopup() {
    this.close.emit();
  }

  
  submitForm() {
    // Just close the popup
    this.closePopup();
  }
}
