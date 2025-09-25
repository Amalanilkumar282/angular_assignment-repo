import { Component ,EventEmitter,Output} from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  @Output() createStory = new EventEmitter<void>();
  @Output() createEpic = new EventEmitter<void>();
  showProfileCard = false;
  userName = 'Linda Smith';
  userPhoto = 'assets/profile.jpg';
  userRole = 'Project Manager';

  onCreateStoryClick() {
    console.log('Navbar: Create Story clicked');
    this.createStory.emit();
  }
  onCreateEpicClick() {
    console.log('Navbar: Create Epic clicked');
    this.createEpic.emit();
  }
  toggleProfileCard() {
    this.showProfileCard = !this.showProfileCard;
  }
}
