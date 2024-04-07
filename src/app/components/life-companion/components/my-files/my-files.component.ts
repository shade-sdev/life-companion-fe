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
    this.fileService.downloadFile("26ded377-e8de-447b-8a14-834c5ceaecff").subscribe(
      ({blob, fileName}: { blob: Blob, fileName: string }) => {
        // Create a URL for the Blob and initiate download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName; // Use the provided file name
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error => {
        // Handle error
        console.error('Error downloading file:', error);
      }
    );
  }
}
