import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatasetService} from '../service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
    selector: 'app-add-or-update',
    templateUrl: './add-or-update.component.html',
    styleUrl: './add-or-update.component.scss'
})
export class AddOrUpdateComponent {
    public form: FormGroup;
    public uploadForm: FormGroup;
    public selectedFile: File | null = null;
    public datasetId: number | null = null;

    public constructor(public fb: FormBuilder, private datasetService: DatasetService, private toastr: ToastrService,
                       private router: Router, private route: ActivatedRoute
    ) {
        this.form = fb.group({
            name: [],
            description: [],
            author: [],
            target: [],
            version: [1]
        });

        this.uploadForm = this.fb.group({
            csvFile: [null, Validators.required]
        });

    }

    public createDataset() {
        this.datasetService.post(this.form.getRawValue()).subscribe(d => {
            this.toastr.success(`${d.name} created with success!`, "Result");
            this.datasetId = d.id;
        })
    }

    onFileSelected(event: any) {
        const file: File = event.target.files[0];

        if (file && file.name.endsWith('.csv')) {
            this.selectedFile = file;
            this.uploadForm.patchValue({csvFile: file});
        } else {
            alert('Por favor, selecione um arquivo CSV válido.');
            this.selectedFile = null;
            this.uploadForm.reset();
        }
    }

    onSubmit() {
        if (this.uploadForm.valid && this.selectedFile) {

            const formData = new FormData();
            formData.append('file', this.selectedFile);

            this.datasetService.upload(this.datasetId!, formData).subscribe(() => {
                this.toastr.success('Upload feito com sucesso!', 'Resultado');
            });
        }
    }

}
