import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { catchError, EMPTY, endWith, map, Subscription, tap } from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';
import { ErrorService } from 'src/app/services/errorService/error.service';
import { LanguageService } from 'src/app/services/languageService/language.service';
import { ProjectService } from 'src/app/services/projectService/project.service';
import { ProjectComponent } from 'src/app/components/project/project.component';

@Component({
    selector: 'app-project',
    templateUrl: './projectPage.component.html',
    styleUrls: ['./projectPage.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectPageComponent implements OnInit {

    public isLoading: boolean = false;
    public isGerman: boolean = this.languageService.languageInBrowser()

    public projects$ = this.projectService.projects$
        .pipe(
            tap(() => this.isLoading = true),   
            map((project: ProjectModel[]) => project),
            tap(() => this.isLoading = false),          
        catchError(err => {
               this.isLoading = false;
               return EMPTY;
            })
        );

    public items = this.projects$;

    constructor(
        private projectService: ProjectService,
        private errorService: ErrorService,
        public languageService: LanguageService
    ) {}

    ngOnInit() {}

    onDestroy() {
        this.isLoading = false;
    }
}
