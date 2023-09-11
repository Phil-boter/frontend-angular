import { Injectable } from '@angular/core';

import { Project } from 'src/app/interfaces/Projects';
import { ErrorService } from '../errorService/error.service';
import { RestService } from '../restService/rest.service';
import { ToastService } from '../toastService/toast.service';
import { ProjectModel } from 'src/app/models/project.model';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable, Subscription, map, shareReplay, catchError, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { LanguageService } from '../languageService/language.service';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    public projects: ProjectModel[] = [];
    public project!: ProjectModel;
   // private readonly baseURL: string = 'http://localhost:3500';
    private readonly baseURL: string = environment.API_URL;

    constructor(
        private http: HttpClient,
        private errorService: ErrorService,
        private languageService: LanguageService
    ) {}

    // project section
    public projects$ = this.http.get<{ rows: ProjectModel[] }>(`${this.baseURL}/v1/projects/allProjects`)
    .pipe(
        map((data) => (
            data.rows.map((item: ProjectModel) => (
                ProjectModel.createProject(item))
        ))
        ),
        catchError(err => {
            return this.errorService.errorHandler(err, this.languageService.languageInBrowser() ? 'Projekte konnten nicht geladen werden' : 'Unable to load projects');
         }),
        shareReplay(1),
    );

}