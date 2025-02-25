import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPOptions } from '../interfaces/core.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private http_service: HttpClient) { }

    public get<T>(options: HTTPOptions): Observable<T> {
        return this.http_service.get<T>(options.endpoint)
    }

    public post<T>(options: HTTPOptions): Observable<T> {
        return this.http_service.post<T>(options.endpoint, options.params)
    }
}
