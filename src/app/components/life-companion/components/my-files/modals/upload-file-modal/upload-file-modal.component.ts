import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../../../../shared/components/modal/modal.component";
import {NgIcon} from "@ng-icons/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-upload-file-modal',
  standalone: true,
  imports: [
    ModalComponent,
    NgIcon,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './upload-file-modal.component.html',
  styleUrl: './upload-file-modal.component.css'
})
export class UploadFileModalComponent {

  @ViewChild("uploadFileModal") uploadFileModal: ModalComponent = new ModalComponent();

  @Input() progress: number = 0;

  @Output() uploadEmitter: EventEmitter<any> = new EventEmitter<any>();

  public uploadForm: FormGroup;

  public selectedFile: File | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.uploadForm = this.formBuilder.group({
      file: ['', Validators.required] // Add validation for required file
    });
  }

  upload() {
    this.uploadEmitter.emit(this.selectedFile);
  }

  clearFile() {
    this.uploadForm?.get('file')?.setValue(null);
    this.selectedFile = undefined;
  }

  get fileName(): string {
    const file = this.uploadForm?.value?.file;
    const filenameStartIndex = file.lastIndexOf('\\') + 1;
    return file.substring(filenameStartIndex);
  }


  onFileSelected(event: any) {
    this.selectedFile = (event!.target! as HTMLInputElement).files![0];
  }

  openModal() {
    this.uploadFileModal.open();
  }

  closeModal() {
    this.uploadFileModal.close();
  }

  protected readonly File = File;
}
