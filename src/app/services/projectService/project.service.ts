import { Injectable } from '@angular/core';

import { Project } from 'src/app/interfaces/Projects';
import { ErrorService } from '../errorService/error.service';
import { RestService } from '../restService/rest.service';
import { ToastService } from '../toastService/toast.service';
import { ProjectModel } from 'src/app/models/project.model';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    public projects: ProjectModel[] = [];
    public project!: ProjectModel;

    constructor(
        private restService: RestService,
        private errorService: ErrorService,
        private toastService: ToastService
    ) {}

    // project section
    public async getProjects(): Promise<ProjectModel[]> {
        try {
            const projectsArray: ProjectModel[] = [];
            const data = await this.restService.getAllProjects().toPromise();
            if (data && data.length > 0) {
                this.toastService.showInfo('all projects are loaded', 'Info');
                data.forEach((project: Project) => {
                    const newProject = ProjectModel.createProject(project);
                    projectsArray.push(newProject);
                });
                return projectsArray;
            } else {
                return [];
            }
        } catch (err) {
            return this.errorService.errorHandler(err);
        }
    }

}
