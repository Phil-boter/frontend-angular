import { Inject, Injectable } from '@angular/core';
import { RestService } from '../restService/rest.service';
import { ToastService } from '../toastService/toast.service';
import { ErrorService } from '../errorService/error.service';
import { Observable } from 'rxjs';
import { Email } from 'src/app/interfaces/email';
import { FormBuilder } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class EmailService {
    constructor(
        private restService: RestService,
        private toastService: ToastService,
        private errorService: ErrorService
    ) {}

    public async sendEmail(data: Email): Promise<void> {
        try {
            this.restService.sendEmail(data).subscribe((res) => {
                if (res.success) {
                    this.toastService.showInfo(`${res.msg}`, 'Info');
                }
            });
        } catch (error) {
            return this.errorService.errorHandler(error, 'unable to send message');
        }
    }
}
