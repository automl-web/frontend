import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  title = "File Upload"
  supported_formats = ".csv,.xlsx"

  constructor(public dialogRef: MatDialogRef<FileUploadComponent>) {

  }

  fileChange(e: any) {
    const file = e.target.files[0] as File;
    if (file) {
      this.dialogRef.close(file);
    }
  }
}
