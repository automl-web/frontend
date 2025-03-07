import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/enviroments";


export class GenericService<Req, Res> {

    public constructor(private path: string, protected http: HttpClient) {}

    protected get url() {
        return `${environment.apiUrl}/${this.path}`;
    }

    public post(req: Req) {
        return this.http.post<Res>(this.url, req);
    }

    public get(id: number) {
        return this.http.get<Res>(`${this.url}/${id}`);
    }

    public list() {
        return this.http.get<Res[]>(`${this.url}`);
    }

    public delete(id: number) {
        return this.http.delete(`${this.url}/${id}`);

    }

    public update(id: number, req: Req) {
        return this.http.put<Res>(`${this.url}/${id}`, req);
    }
}