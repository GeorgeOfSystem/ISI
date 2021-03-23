import { Component, Input, OnInit } from '@angular/core';
import { Upload } from 'src/app/shared/services/upload';
import { UploadService } from 'src/app/shared/services/upload.service';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss']
})
export class UploadDetailsComponent implements OnInit {
  @Input() fileUpload: Upload;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  deleteFile(upload: Upload): void{
    this.uploadService.deleteFile(upload);
  }

}
