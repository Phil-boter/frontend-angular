import { Component, OnInit } from '@angular/core';
import { tap, map, catchError, EMPTY } from 'rxjs';
import { AboutModel } from 'src/app/models/about-model.model';
import { ErrorService } from 'src/app/services/errorService/error.service';
import { LanguageService } from 'src/app/services/languageService/language.service';
import { AboutInfoService } from 'src/app/services/aboutInfoService/about-info.service';
import { RestService } from 'src/app/services/restService/rest.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  
  public isLoading: boolean = false;
  public isGerman: boolean = this.languageService.languageInBrowser();
  public toggleFlag = false;
  public aboutInfo!: AboutModel;

  // public aboutInfo$ = this.aboutInfoService.aboutInfo$
  //     .pipe(
  //         tap(() => this.isLoading = true),
  //         map((value: AboutModel[]) => value[1]),
  //         tap(val=> console.log("info", val)),
  //         tap(() => this.isLoading = false),          
  //     catchError(err => {
  //            this.isLoading = false;
  //            return EMPTY;
  //         })
  //     );

  // public items = this.aboutInfo$;

  constructor(
    private aboutInfoService: AboutInfoService,
    private errorService: ErrorService,
    public languageService: LanguageService,
    private restService: RestService
  ) {}

  ngOnInit(): void {
   this.loadData()
   console.log("info", this.aboutInfo)
  }

  private async loadData() {
    this.restService.getAboutInfo().pipe(map(data => data.rows.map((value: AboutModel)=> this.aboutInfo = AboutModel.createAboutInfo(value))));
    console.log(this.aboutInfo)
  }
}
