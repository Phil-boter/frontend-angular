import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Project } from 'src/app/interfaces/Projects';
import { ErrorService } from 'src/app/services/errorService/error.service';

import { ProjectService } from 'src/app/services/projectService/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  	projects: Project[] = [];
	error = '';

  	constructor(private projectService: ProjectService, errorService: ErrorService) { }

  	ngOnInit(): void {
    	this.getAllProjects();
  	}
   
  	getAllProjects() {
		this.projectService.getAllProjects().subscribe((data:Project[])=> {
			console.log(data)
			this.projects = data
		})
  	}
}
