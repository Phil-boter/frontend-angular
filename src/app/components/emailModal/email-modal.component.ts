import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators,
    NgForm,
} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { EmailService } from 'src/app/services/emailService/email.service';
import { Email } from 'src/app/pages/emailPage/email-page.component';

@Component({
    selector: 'app-email-modal',
    templateUrl: './email-modal.component.html',
    styleUrls: ['./email-modal.component.css'],
})
export class EmailModalComponent implements OnInit {
    public FormData!: FormGroup;
    public isLoading: boolean = false;
    constructor(
        private builder: FormBuilder,
        private emailService: EmailService,
        private modalCtrl: ModalController
    ) {}

    ngOnInit(): void {
        this.createFormData();
    }

    private createFormData() {
        this.FormData = this.builder.group({
            from: new FormControl('', [Validators.required]),
            subject: new FormControl('', [Validators.required]),
            text: new FormControl('', [Validators.required]),
            created_at: Date.now(),
        });
        console.log('form', this.FormData.valid);
    }

    public onSubmit(data: any) {
        this.isLoading = true;
        this.FormData.disabled;
        this.modalCtrl.dismiss({ data });
        this.isLoading = false;
    }

    public dismiss() {
        this.modalCtrl.dismiss();
    }
}
