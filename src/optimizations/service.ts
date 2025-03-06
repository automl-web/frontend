import {Injectable} from "@angular/core";
import {GenericService} from "../services/generic_service";
import {HttpClient} from "@angular/common/http";

export interface OptimizationRequest{

}

export interface OptimizationResponse {
    id: number;
    name: string;
    optimization: string;
}

@Injectable({
    providedIn: "root"
})
export class OptimizationService extends GenericService<Request, OptimizationResponse> {
    public constructor(protected override http: HttpClient) {
        super("optimizations", http);
    }

    public run(id: number) {
        return this.http.post(`${super.url}/${id}/run`, {});
    }

    public listSupportedOptimizers() {
        return this.http.get<string[]>(`${super.url}/supported-optimizers`);
    }

    public listScoringFunctions() {
        return this.http.get<string[]>(`${super.url}/scoring-functions`);
    }
}