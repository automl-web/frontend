import {Injectable} from "@angular/core";
import {GenericService} from "../services/generic_service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface DatasetRequest {
    name: string;
    author: string;
    version: string;
    targetFeature: string;
}

export interface DatasetResponse {
    id: number;
    name: string;
    author: string;
    version: string;
    numRows: number;
    numCols: number;
    targetFeature: string;
}

@Injectable({
    providedIn: "root"
})
export class DatasetService extends GenericService<DatasetRequest, DatasetResponse> {
    public constructor(protected override http: HttpClient) {
        super("datasets", http);
    }

    public upload(dataset_id: number, body: FormData) {
        return this.http.post(`${super.url}/${dataset_id}/upload`, body);
    }

    public listFeatures(dataset_id: number): Observable<string[]> {
        return this.http.get<string[]>(`${super.url}/${dataset_id}/list-features`);
    }
}