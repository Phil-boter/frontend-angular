import { Injectable } from '@angular/core';
import { ToastService } from '../toastService/toast.service';

@Injectable({
    providedIn: 'root',
})
export class ErrorService {
    constructor(private toastService: ToastService) {}

    public errorHandler(error: any): Promise<any> {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        this.toastService.showError('failed loading projects', 'Error');
        throw new Error(errorMessage);
    }
}
