import {Component} from '@angular/core';
import {DatasetResponse} from "../../datasets/service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {
    displayedColumns: string[] = ['id', 'name', 'dataset_name', 'optimizer', 'action'];
    dataSource: DatasetResponse[] = [];
}
