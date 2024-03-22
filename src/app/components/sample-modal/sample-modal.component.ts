import {Component, ViewChild} from '@angular/core';
import {ModalComponent} from "../../shared/components/modal/modal.component";

@Component({
  selector: 'app-sample-modal',
  standalone: true,
  imports: [
    ModalComponent
  ],
  templateUrl: './sample-modal.component.html',
  styleUrl: './sample-modal.component.css'
})
export class SampleModalComponent {

  @ViewChild("sampleModal") sampleModal: ModalComponent = new ModalComponent();

  openModal() {
    this.sampleModal.open();
  }

  closeModal() {
    this.sampleModal.close();
  }
}
