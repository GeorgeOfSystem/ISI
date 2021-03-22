import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';



@NgModule({
  declarations: [
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent
  ]
})
export class UploadModule { }
