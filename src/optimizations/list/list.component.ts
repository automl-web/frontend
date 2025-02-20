import { Component } from '@angular/core';
import {DatasetResponse} from "../../datasets/service";
import {OptimizationResponse, OptimizationService} from "../service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
    displayedColumns: string[] = ['id', 'name', 'dataset_name', 'optimizer', 'action'];
    dataSource: OptimizationResponse[] = [];

    constructor(private optimizationService: OptimizationService) {
        this.optimizationService.list().subscribe(data => {
            this.dataSource = data;
        });
    }

    startAlgorithm(id: number) {
        this.optimizationService.run(id).subscribe(data => {
            console.log(data);
        });
    }
}
