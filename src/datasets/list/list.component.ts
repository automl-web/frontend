import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic_service';
import { DatasetResponse, DatasetService } from '../service';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadComponent } from '../../util/file-upload/file-upload.component';
import { AdditionalConfigurationComponent } from '../additional-configuration/additional-configuration.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'n_rows', 'n_cols', 'author', 'version', 'action'];
  dataSource: DatasetResponse[] = [];

  public constructor(private dialog: MatDialog, private datasetService: DatasetService) {

  }

  ngOnInit(): void {
    this.datasetService.list().subscribe(d => this.dataSource = d);
  }

  uploadDatasetDialog(id: number) {
    const dialogRef = this.dialog.open(AdditionalConfigurationComponent, {width: "50%", height: "300px"});

    dialogRef.afterClosed().subscribe(file => {
      const form = new FormData();
      form.append("file", file);
      this.datasetService.upload(id, form).subscribe(d => console.log(d));
    });
  }
  
}
