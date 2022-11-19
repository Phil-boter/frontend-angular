import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { EmailModalComponent } from 'src/app/components/emailModal/email-modal.component';
import { EmailService } from '../emailService/email.service';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    public FormData!: FormGroup;
    constructor(
        private builder: FormBuilder,
        private emailService: EmailService,
        private modalCtrl: ModalController
    ) {}

    public async openEmailModal() {
        const modal = await this.modalCtrl.create({
            id: 'emailModalComponent',
            component: EmailModalComponent,
            componentProps: {},
            cssClass: 'email-modal',
            backdropDismiss: true,
            showBackdrop: false,
        });

        modal.present();

        const data: any = await modal.onWillDismiss();
        if (data.data && data.data != undefined) {
            await this.emailService.sendEmail(data.data);
        }
    }

    public async dismissModal() {
        this.modalCtrl.dismiss();
    }
}
