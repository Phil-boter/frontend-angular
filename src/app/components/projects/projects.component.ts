import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, map, Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/Projects';

import { ErrorService } from 'src/app/services/errorService/error.service';
import { LoadingService } from 'src/app/services/loadingService/loading.service';
import { ProjectService } from 'src/app/services/projectService/project.service';
import { ToastService } from 'src/app/services/toastService/toast.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
    public projects?: Project[] = [];
    public error = Subscription;
    public isLoading: boolean = false;

    constructor(
        private projectService: ProjectService,
        private errorService: ErrorService,
        private toastService: ToastService,
        private loadingService: LoadingService
    ) {}

    ngOnInit(): void {
        console.log('projects comoponent');
        this.loadProjects();
    }

    private async loadProjects(): Promise<void> {
        this.isLoading = true;
        this.projects = await this.projectService.getProjects();
        this.isLoading = false;
    }
}
