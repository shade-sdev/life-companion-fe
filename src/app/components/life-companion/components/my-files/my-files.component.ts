import {Component, OnInit, ViewChild} from '@angular/core';
import {FileService} from "../../services/file.service";
import {UUID} from "../../../../shared/util/uuid";
import {NgIcon} from "@ng-icons/core";
import {UploadFileModalComponent} from "./modals/upload-file-modal/upload-file-modal.component";
import {HttpEventType} from "@angular/common/http";
import {TelegramFile} from "../../../../shared/models/file/telegram-file";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-my-files',
  standalone: true,
  imports: [
    NgIcon,
    UploadFileModalComponent,
    NgForOf
  ],
  providers: [FileService],
  templateUrl: './my-files.component.html',
  styleUrl: './my-files.component.css'
})

export class MyFilesComponent implements OnInit {

  constructor(private fileService: FileService) {
  }

  public files: Array<TelegramFile> = [];

  public progress: number = 0;

  @ViewChild('uploadFileModal') uploadFileModalComponent!: UploadFileModalComponent;

  ngOnInit(): void {
    this.searchFiles();
  }

  uploadFile(file: File) {
    this.fileService.uploadFile('file', file).subscribe({
      next: event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total!);
        } else if (event.type === HttpEventType.Response) {
          this.progress = 0;
          this.uploadFileModalComponent.closeModal();
          this.searchFiles();
        }
      },
      error: err => {
        console.log('Could not upload file', err)
      }
    });
  }

  searchFiles() {
    this.fileService.searchFiles({pageNumber: 0, pageSize: 10}).subscribe({
      next: value => {
        this.files = value.elements;
      }
    })
  }

  downloadFile(id: UUID) {
    this.fileService.downloadFile(id)
      .subscribe(blob => {
        const url = window.URL.createObjectURL(blob.blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = blob.fileName; // Set your desired filename here
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }

}
