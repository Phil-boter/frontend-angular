import { trigger, transition, style, animate, group, query } from '@angular/animations';
import {
    Component,
    OnInit,
    OnDestroy,
    ElementRef,
    ViewChild,
    QueryList,
    ViewChildren,
    AfterViewInit,
    AfterViewChecked,
    SimpleChanges,
    Input,
} from '@angular/core';
import {
    Subscription,
    map,
    Observable,
    filter,
    switchMap,
    findIndex,
} from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';
import { LanguageService } from 'src/app/services/languageService/language.service';

import { ProjectService } from 'src/app/services/projectService/project.service';

@Component({
    selector: 'app-project-component',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
    animations: [
        trigger('fade', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate(1000, style({ opacity: 1 }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate(1000, style({ opacity: 0 }))
            ])
        ])
      ],
})
export class ProjectComponent implements OnInit, AfterViewChecked {
    @Input() project!: ProjectModel;
    @Input() isGerman: boolean = false;

    public projects: ProjectModel[] = [];
    public error = Subscription;
    private isLoading: boolean = false;
    public showProject = false;

    constructor(
        private langaugeService: LanguageService,
        private ref: ElementRef
    ) {}

    ngOnInit(): void {}

    ngAfterViewChecked() {}

    ngOnChanges(changes: SimpleChanges) {}
    
    ngOnDestroy() {
        this.showProject = false;
        this.loading = false;
    }

    public get loading() {
        return this.isLoading;
    }

    public set loading(value) {
        this.isLoading = value;
    }
}
