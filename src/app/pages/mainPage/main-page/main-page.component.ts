import { Component, OnInit } from '@angular/core';
import { tap, map, catchError, EMPTY, Subscription } from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';
import { LanguageService } from 'src/app/services/languageService/language.service';
import { ProjectService } from 'src/app/services/projectService/project.service';
import { ResizeService } from 'src/app/services/resizeService/resize.service';

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
  public projects!: ProjectModel[];
  
  public isMobile: boolean = false;
  public resizeSubscription: Subscription = new Subscription();

  constructor(
    private projectService: ProjectService,
    private languageService: LanguageService,
    private resizeService: ResizeService
  ) {}

  ngOnInit(): void {
    this.resizeSubscription.add;
    this.projectService.projects$.subscribe((data:ProjectModel[]) => {
        console.log(data);
        this.projects = data;
    })
}
  ngDoCheck() {
      this.isMobile = this.resizeService.isMobile();
  }

}
