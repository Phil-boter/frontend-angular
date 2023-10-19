import { Injectable } from '@angular/core';
import { AboutInfo } from 'src/app/interfaces/aboutInfo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { LanguageService } from '../languageService/language.service';
import { ErrorService } from '../errorService/error.service';
import { AboutModel } from 'src/app/models/about-model.model';
import { map, catchError, shareReplay, take, tap, first } from 'rxjs';
import { RestService } from '../restService/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AboutInfoService {

  public aboutInfo!: AboutInfo;
  
  private readonly baseURL: string = 'http://localhost:3500';
  //private readonly baseURL: string = environment.API_URL;


  constructor(
      private http: HttpClient,
      private errorService: ErrorService,
      private languageService: LanguageService,
      private restService: RestService
  ) {}
 }
