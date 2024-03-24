import {Component, HostListener, Input, WritableSignal} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgIcon,
    NgClass
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public profileOptionsOpen: boolean = false;

  @Input() darkMode: WritableSignal<boolean> | undefined;

  toggleDarkMode() {
    this.darkMode?.set(!this.darkMode())
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const ulElement = document.getElementById('profile-menu');
    const triggerElement = document.getElementById('profile-menu-trigger');

    if (!(triggerElement && triggerElement?.contains(clickedElement)) && !(ulElement?.contains(clickedElement))) {
      this.profileOptionsOpen = !this.profileOptionsOpen;
    }
  }

}
