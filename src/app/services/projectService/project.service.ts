import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , map, catchError } from 'rxjs';

import { Project } from 'src/app/interfaces/Projects';
import { ErrorService } from '../errorService/error.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  	private baseURL:string ="http://localhost:3500"

  	constructor(
      private http: HttpClient,
      private errorService: ErrorService
      ) {}

    getAllProjects(): Observable<Project[]> {
       return this.http.get<{payload: Project[]}>(`${this.baseURL}/v1/projects/allProjects`)
       .pipe(catchError(this.errorService.errorHandler)) 
       .pipe(map(response=> response.payload));
	}
}