import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , map, catchError, retry, throwError } from 'rxjs';

import { Project } from 'src/app/interfaces/Projects';
import { ErrorService } from '../errorService/error.service';

@Injectable({
  	providedIn: 'root'
})
export class ProjectService {

	private readonly baseURL:string ="http://localhost:3500";

	constructor(
	  private http: HttpClient,
	  private errorService: ErrorService
	  ) { }
  
	// project section 
	public getAllProjects():Observable<Project[]> {	
		return this.http.get<{rows: Project[]}>(`${this.baseURL}/v1/projects/allProjects`).pipe(map(data=> data.rows));
	  }
}