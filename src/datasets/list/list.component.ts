import {Component, OnInit} from '@angular/core';
import {DatasetResponse, DatasetService} from '../service';
import {MatDialog} from '@angular/material/dialog';
import {AdditionalConfigurationComponent} from '../additional-configuration/additional-configuration.component';
import {ToastrService} from "ngx-toastr";


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'n_rows', 'n_cols', 'author', 'version', 'action'];
    dataSource: DatasetResponse[] = [];

    public constructor(private dialog: MatDialog,
                       private datasetService: DatasetService,
                       private toastr: ToastrService) {

    }

    ngOnInit(): void {
        this.list();
    }

    uploadDatasetDialog(id: number) {
        const dialogRef = this.dialog.open(AdditionalConfigurationComponent, {width: "50%", height: "300px"});

        dialogRef.afterClosed().subscribe(file => {
            const form = new FormData();
            form.append("file", file);
            this.datasetService.upload(id, form).subscribe(d => console.log(d));
        });
    }

    list() {
        this.datasetService.list().subscribe(d => this.dataSource = d);
    }

    delete(id: number) {
        this.datasetService.delete(id).subscribe(() => {
            this.toastr.success('Dataset deleted with success!', 'Result');
            this.list();
        });
    }

}
