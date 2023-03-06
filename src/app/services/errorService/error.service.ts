import { Injectable } from '@angular/core';
import { ToastService } from '../toastService/toast.service';

@Injectable({
    providedIn: 'root',
})
export class ErrorService {
    constructor(private toastService: ToastService) {}

    public errorHandler(error: any, errorMessage: string): Promise<any> {
        let errorLog = '';
        if (error.error instanceof ErrorEvent) {
            errorLog = error.error.message;
        } else {
            errorLog = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        this.toastService.showError(`${errorMessage}`, 'Error');
        throw new Error(errorLog);
    }
}
