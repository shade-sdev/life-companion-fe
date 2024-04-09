import {Component, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-my-files',
  standalone: true,
  imports: [],
  providers: [FileService],
  templateUrl: './my-files.component.html',
  styleUrl: './my-files.component.css'
})
export class MyFilesComponent implements OnInit {

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
    this.fileService.searchFiles({pageNumber: 0, pageSize: 10}).subscribe({
      next: value => {
        console.log(value);
      }
    })
  }

  downloadFile() {
    this.fileService.downloadFile("26ded377-e8de-447b-8a14-834c5ceaecff").subscribe(blob => {
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
