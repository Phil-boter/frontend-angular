import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { catchError, EMPTY, endWith, map, Subscription, tap } from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';
import { ErrorService } from 'src/app/services/errorService/error.service';
import { LanguageService } from 'src/app/services/languageService/language.service';
import { ProjectService } from 'src/app/services/projectService/project.service';
import { ProjectComponent } from 'src/app/components/project/project.component';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-project',
    templateUrl: './projectPage.component.html',
    styleUrls: ['./projectPage.component.css'],
    animations: [
        trigger('fadeSlide', [
            transition(':enter', [
              group([
                query('.item:nth-child(odd)', [
                  style({ opacity: 0, transform: 'translateX(-250px)' }),
                  animate(
                    1000,
                    style({ opacity: 1, transform: 'translateX(0)' })
                  )
                ]),
                query('.item:nth-child(even)', [
                  style({ opacity: 0, transform: 'translateX(250px)' }),
                  animate(
                    1000,
                    style({ opacity: 1, transform: 'translateX(0)' })
                  )
                ])
              ])
            ]),
            transition(':leave', [
              group([
                query('.item:nth-child(odd)', [
                  animate(
                    1000,
                    style({ opacity: 0, transform: 'translateX(-250px)' })
                  )
                ]),
                query('.item:nth-child(even)', [
                  animate(
                    1000,
                    style({ opacity: 0, transform: 'translateX(250px)' })
                  ),
                ])
              ])
            ])
          ])
      ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectPageComponent implements OnInit {

    public isLoading: boolean = false;
    public isGerman: boolean = this.languageService.languageInBrowser();
    public showProjects = true
    public toggleFlag = false;

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
        public languageService: LanguageService,
       
    ) {}

    ngOnInit() {
        this.toggleEvents();
    }

    onDestroy() {
        this.isLoading = false;
        this.showProjects = false;
    }

    public toggleEvents() {
        if(!this.toggleFlag) {
            this.showProjects = !this.showProjects
        }
    }
}
