import { Component ,EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  @Output() createStory = new EventEmitter<void>();
 @Output() createEpic = new EventEmitter<void>()
  onCreateStoryClick() {
    console.log('Navbar: Create Story clicked');
    this.createStory.emit();
  }
  onCreateEpicClick() {
    console.log('Navbar: Create Epic clicked');
    this.createEpic.emit(); // 👈 emit event
  }
}
