import { Component, OnInit } from '@angular/core';
import {
    UntypedFormGroup,
    UntypedFormBuilder,
    UntypedFormControl,
    Validators,
    NgForm,
} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { EmailService } from 'src/app/services/emailService/email.service';
import { Email } from 'src/app/interfaces/email';
import { ToastService } from 'src/app/services/toastService/toast.service';

@Component({
    selector: 'app-email-modal',
    templateUrl: './email-modal.component.html',
    styleUrls: ['./email-modal.component.css'],
})
export class EmailModalComponent implements OnInit {
    public FormData!: UntypedFormGroup;
    public isLoading: boolean = false;
    constructor(
        private builder: UntypedFormBuilder,
        private emailService: EmailService,
        private modalCtrl: ModalController,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.createFormData();
    }

    private createFormData() {
        this.FormData = this.builder.group({
            from: new UntypedFormControl('', [Validators.required]),
            subject: new UntypedFormControl('', [Validators.required]),
            text: new UntypedFormControl('', [Validators.required]),
            created_at: Date.now(),
        });
        console.log('form', this.FormData.valid);
    }

    public onSubmit(data: any) {
        this.isLoading = true;
        this.FormData.disabled;
        this.modalCtrl.dismiss({ data }, 'submit', 'emailModalComponent');
        this.isLoading = false;
    }

    public dismiss() {
        this.modalCtrl.dismiss(null, 'cancel', 'emailModalComponent');
    }
}
