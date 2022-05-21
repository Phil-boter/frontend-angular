import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, map, Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/Projects';

import { ErrorService } from 'src/app/services/errorService/error.service';
import { ProjectService } from 'src/app/services/projectService/project.service';
import { ToastService } from 'src/app/services/toastService/toast.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  	public projects?:Project[] = [];
	public error = Subscription


	constructor(
		private projectService: ProjectService,
		private errorService: ErrorService,
		private toastService: ToastService
    ) {}

	ngOnInit(): void {
		console.log("projects comoponent")
		this.getAllProjects()
	}
    public getAllProjects() {
		try {
			this.projectService.getAllProjects().subscribe((data:Project[]) => {
                this.projects = data
				this.toastService.showInfo("all projects are loaded", "Projects");
			})
		} catch(err) {
			this.toastService.showError("we are working on it", "Error");
 		}
	}
}
