import {Component} from '@angular/core';
import {OptimizationResponse, OptimizationService} from "../service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {
    displayedColumns: string[] = ['id', 'name', 'dataset_name', 'optimizer', 'action'];
    dataSource: OptimizationResponse[] = [];

    constructor(private optimizationService: OptimizationService,
                private toastr: ToastrService) {
        this.list();
    }

    startAlgorithm(id: number) {
        this.optimizationService.run(id).subscribe(data => {
            console.log(data);
        });
    }

    list() {
        this.optimizationService.list().subscribe(data => {
            this.dataSource = data;
        });
    }

    delete(id: number) {
        this.optimizationService.delete(id).subscribe(() => {
            this.toastr.success('Optimization deleted with success!', 'Result');
            this.list();
        });
    }
}
