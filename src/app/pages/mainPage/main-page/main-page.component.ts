import { Component, OnInit } from '@angular/core';
import { tap, map, catchError, EMPTY } from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';
import { LanguageService } from 'src/app/services/languageService/language.service';
import { ProjectService } from 'src/app/services/projectService/project.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

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
    private languageService: LanguageService,
  ) {}

  ngOnInit(): void {
  }

}
