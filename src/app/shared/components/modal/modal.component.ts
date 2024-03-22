import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgIcon,
    NgClass
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @ViewChild('modal', {static: false}) modalRef!: ElementRef;

  @Output() closed = new EventEmitter<void>();

  open() {
    if (this.modalRef && this.modalRef.nativeElement) {
      this.modalRef.nativeElement.style.display = 'flex';
    }
  }

  close() {
    if (this.modalRef && this.modalRef.nativeElement) {
      this.modalRef.nativeElement.style.display = 'none';
      this.closed.emit();
    }
  }

}
