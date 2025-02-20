import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-add-or-update',
    templateUrl: './add-or-update.component.html',
    styleUrl: './add-or-update.component.scss'
})
export class AddOrUpdateComponent {
    algorithmForm: FormGroup;
    tpotParameterForm: FormGroup;
    datasets = ['Dataset A', 'Dataset B', 'Dataset C'];
    optimizationAlgorithms = ['TPOT'];
    scoringMethods = ['accuracy', 'adjusted_rand_score', 'average_precision', 'balanced_accuracy', 'f1',
        'f1_macro', 'f1_micro', 'f1_samples', 'f1_weighted', 'neg_log_loss', 'precision', 'recall', 'jaccard',
        'roc_auc', 'roc_auc_ovr', 'roc_auc_ovo', 'roc_auc_ovr_weighted', 'roc_auc_ovo_weighted']

    constructor(private fb: FormBuilder) {
        this.algorithmForm = this.fb.group({
            dataset: [null, Validators.required],
            optimizationAlgorithm: [null, Validators.required]
        });

        this.tpotParameterForm = this.fb.group({
            dataset: [null, Validators.required],
            optimizationAlgorithm: [null, Validators.required],
            generations: [100, [Validators.required, Validators.min(1)]],
            population_size: [100, [Validators.required, Validators.min(1)]],
            offspring_size: [null],
            mutation_rate: [0.9, [Validators.required, Validators.min(0), Validators.max(1)]],
            crossover_rate: [0.1, [Validators.required, Validators.min(0), Validators.max(1)]],
            scoring: ['accuracy', Validators.required],
            cv: [5, [Validators.required, Validators.min(2)]],
            subsample: [1.0, [Validators.required, Validators.min(0), Validators.max(1)]],
            n_jobs: [1, Validators.required],
            max_time_mins: [null],
            max_eval_time_mins: [5, [Validators.required, Validators.min(1)]],
            random_state: [null],
            config_dict: [null],
            template: [null],
            warm_start: [false]
        });
    }

    onSubmit() {
        if (this.algorithmForm.valid) {
            console.log('Form Data:', this.algorithmForm.value);
        }
    }
}
