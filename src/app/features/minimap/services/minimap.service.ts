import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPOptions } from 'src/app/core/interfaces/core.interfaces';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
    providedIn: 'root'
})
export class MinimapService {
    repo_url: string = `https://api.github.com/repos/AlvaroAriel/arielAlvaroPortfolio`

    constructor(private http_service: HttpService) { }

    getRepositoryStars(): Observable<{stargazers_count: number}> {
       
        let options: HTTPOptions = {
            endpoint: this.repo_url,
            params: {}
        }

        return this.http_service.get(options)
    }
}
