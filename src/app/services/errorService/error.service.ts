import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  	constructor() { }

  	public errorHandler(error:any) {
		  console.log("erro")
		let errorMessage = '';
		if(error.error instanceof ErrorEvent) {
			errorMessage = error.error.message;
			console.log(errorMessage)
		} 
		else {		
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
			console.log(errorMessage)
		}
    	return throwError(errorMessage);
	}
}