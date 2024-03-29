import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

import { Project } from 'src/app/interfaces/Projects';
import { ErrorService } from '../errorService/error.service';
import { Email } from 'src/app/interfaces/email';
import { ProjectModel } from 'src/app/models/project.model';

@Injectable({
    providedIn: 'root',
})
export class RestService {
    //private readonly baseURL: string = 'http://localhost:3500';
    private readonly baseURL: string = environment.API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService) {}

    // email section

    public sendEmail(data: Email): Observable<any> {
        console.log(`${this.baseURL}/v1/email/sendEmail`, data);
        return this.http
            .post<{ data: Email }>(`${this.baseURL}/v1/email/sendEmail`, {
                data,
            })
            .pipe(map((data) => data));
    }

    // email section end
}
