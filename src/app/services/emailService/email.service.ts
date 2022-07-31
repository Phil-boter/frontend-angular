import { Injectable } from '@angular/core';
import { RestService } from '../restService/rest.service';
import { Email } from 'src/app/pages/emailPage/email-page.component';
import { ToastService } from '../toastService/toast.service';
import { ErrorService } from '../errorService/error.service';

@Injectable({
    providedIn: 'root',
})
export class EmailService {
    constructor(
        private restService: RestService,
        private toastService: ToastService,
        private errorService: ErrorService
    ) {}

    public async sendEmail(data: Email) {
        try {
            this.restService.sendEmail(data).subscribe((res) => {
                if (res.success) {
                    this.toastService.showInfo(`${res.msg}`, 'Info');
                }
            });
        } catch (error) {
            return this.errorService.errorHandler(error);
        }
    }
}
