import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-story-popup',
  standalone: true,
  imports: [],
  templateUrl: './story-popup.html',
  styleUrls: ['./story-popup.css']
})
export class StoryPopup {
   @Output() close = new EventEmitter<void>();
   closePopup() {
    this.close.emit();
  }

  
   submitForm() {
    console.log('Story created!');
    this.close.emit(); // auto close after creating
  }
}
