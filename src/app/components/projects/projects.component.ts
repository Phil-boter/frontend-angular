import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, map, Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/Projects';

import { ErrorService } from 'src/app/services/errorService/error.service';
import { ProjectService } from 'src/app/services/projectService/project.service';

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
		private errorService: ErrorService
    ) {}

	ngOnInit(): void {
		console.log("projects comoponent")
		this.getAllProjects()
	}
    public getAllProjects() {
		try {
			this.projectService.getAllProjects().subscribe((data:Project[]) => {
                this.projects = data
			})
		} catch(err) {
			console.log("error")
 		}

	}
}
