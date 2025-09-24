import { Component ,EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Output() createStory = new EventEmitter<void>();

  onCreateStoryClick() {
    console.log('Navbar: Create Story clicked');
    this.createStory.emit();
  }
}
