import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DatasetService } from '../service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-additional-configuration',
  templateUrl: './additional-configuration.component.html',
  styleUrl: './additional-configuration.component.scss'
})
export class AdditionalConfigurationComponent implements OnInit {
  title = "File Upload"
  supported_formats = ".csv,.xlsx"
  selectedFile = "No file selected yet";
  file: File | null = null;
  features: string[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder, private datasetService: DatasetService,
    private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      targetFeature: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  fileChange(e: any) {
    const file = e.target.files[0] as File;
    if (file) {
      const mb = file.size / 1000;
      this.selectedFile = `${file.name} (${mb} kb)`;
      this.file = file;
    }
  }

  upload() {
    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file);
      const dataset_id = parseInt(this.route.snapshot.paramMap.get("dataset_id") as string);
      this.datasetService.upload(dataset_id, formData).subscribe(d => console.log(d))
    }
  }

  listFeatures() {
    const dataset_id = parseInt(this.route.snapshot.paramMap.get("dataset_id") as string);
    this.datasetService.listFeatures(dataset_id).subscribe(d => this.features = d);
  }

  updateTargetFeature() {
    const dataset_id = parseInt(this.route.snapshot.paramMap.get("dataset_id") as string);
    const body = this.form.getRawValue();
    console.log(body);
    this.datasetService.update(dataset_id, body).subscribe(d => console.log(d));
  }

}
