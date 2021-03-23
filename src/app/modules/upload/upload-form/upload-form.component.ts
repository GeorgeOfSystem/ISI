import { Component, OnInit } from '@angular/core';
import { Upload } from 'src/app/shared/services/upload';
import { UploadService } from 'src/app/shared/services/upload.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: Upload;
  percentage: number;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new Upload(file);
    this.uploadService.uploadFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      }, err => {
        console.log(err);
      }
    );
  }

}
