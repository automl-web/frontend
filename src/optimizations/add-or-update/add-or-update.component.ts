import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatasetResponse, DatasetService} from "../../datasets/service";
import {OptimizationService} from "../service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-add-or-update',
    templateUrl: './add-or-update.component.html',
    styleUrl: './add-or-update.component.scss'
})
export class AddOrUpdateComponent {
    algorithmForm: FormGroup;
    tpotParameterForm: FormGroup;
    datasets: DatasetResponse[] = [];
    optimizationAlgorithms = ['TPOT'];
    scoringFunctions = ['accuracy', 'adjusted_rand_score', 'average_precision', 'balanced_accuracy', 'f1',
        'f1_macro', 'f1_micro', 'f1_samples', 'f1_weighted', 'neg_log_loss', 'precision', 'recall', 'jaccard',
        'roc_auc', 'roc_auc_ovr', 'roc_auc_ovo', 'roc_auc_ovr_weighted', 'roc_auc_ovo_weighted']

    constructor(private fb: FormBuilder,
                private datasetService: DatasetService,
                private optimizationService: OptimizationService,
                private route: ActivatedRoute,
                private toastr: ToastrService) {
        this.algorithmForm = this.fb.group({
            id: [null],
            name: [null, Validators.required],
            dataset: [null, Validators.required],
            optimization: [null, Validators.required]
        });

        this.tpotParameterForm = this.fb.group({
            generations: [100, [Validators.required, Validators.min(1)]],
            populationSize: [100, [Validators.required, Validators.min(1)]],
            offspringSize: [null],
            mutationRate: [0.9, [Validators.required, Validators.min(0), Validators.max(1)]],
            crossoverRate: [0.1, [Validators.required, Validators.min(0), Validators.max(1)]],
            scoringMethod: ['accuracy', Validators.required],
            cv: [5, [Validators.required, Validators.min(2)]],
            subsample: [1.0, [Validators.required, Validators.min(0), Validators.max(1)]],
            nJobs: [1, Validators.required],
            maxTimeMins: [null],
            maxEvalTimeMins: [5, [Validators.required, Validators.min(1)]],
            randomState: [42],
            configDict: [null],
            template: [null],
            warmStart: [false]
        });

        this.datasetService.list().subscribe(datasets => {
            this.datasets = datasets;
        });

        this.optimizationService.listSupportedOptimizers().subscribe(response => {
            this.optimizationAlgorithms = response;
        });

        this.optimizationService.listScoringFunctions().subscribe(response => {
            this.scoringFunctions = response;
        });

        if (this.route.snapshot.params['id']) {
            this.optimizationService.get(this.route.snapshot.params['id']).subscribe(data => {
                this.algorithmForm.patchValue(data);
                this.algorithmForm.patchValue({id: data?.id});
                this.algorithmForm.patchValue({dataset: this.datasets.find(d => d.id == data?.dataset?.id)});
                this.algorithmForm.patchValue({optimization: this.optimizationAlgorithms.find(o => o == data?.algorithm)});
                this.tpotParameterForm.patchValue(data);
                this.tpotParameterForm.patchValue({scoringMethod: this.scoringFunctions.find(s => s == data?.scoringMethod)});
            });
        }
    }

    onSubmit() {
        if (this.algorithmForm.valid && this.tpotParameterForm.valid) {
            const data = {...this.algorithmForm.value, ...this.tpotParameterForm.value};

            if (this.algorithmForm.value.id) {
                this.optimizationService.update(this.algorithmForm.value.id, data).subscribe(d => {
                    this.toastr.success(`${d.name} updated with success!`, "Result");
                });
            } else {
                this.optimizationService.post(data).subscribe(d => {
                    this.toastr.success(`${d.name} created with success!`, "Result");
                });
            }
        }
    }
}
