import { Injectable } from '@angular/core';

import { Project } from 'src/app/interfaces/Projects';
import { ErrorService } from '../errorService/error.service';
import { RestService } from '../restService/rest.service';
import { ToastService } from '../toastService/toast.service';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projects: Project[] = [];

    constructor(
        private restService: RestService,
        private errorService: ErrorService,
        private toastService: ToastService
    ) {}

    // project section
    public async getProjects(): Promise<Project[] | undefined> {
        try {
            const data = await this.restService.getAllProjects().toPromise();
            if (data && data.length > 0) {
                console.log('data', data);
                this.toastService.showInfo('all projects are loaded', 'Info');

                return data;
            } else {
                return undefined;
            }
        } catch (err) {
            return this.errorService.errorHandler(err);
        }
    }
}
