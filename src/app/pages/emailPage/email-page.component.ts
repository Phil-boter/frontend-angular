import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators,
    NgForm,
} from '@angular/forms';
import { EmailService } from 'src/app/services/emailService/email.service';

export interface Email {
    from: string;
    subject: string;
    text: string;
    created_at: number;
}

@Component({
    selector: 'app-email-page',
    templateUrl: './email-page.component.html',
    styleUrls: ['./email-page.component.css'],
})
export class EmailPageComponent implements OnInit {
    FormData!: FormGroup;

    constructor(
        private builder: FormBuilder,
        private emailService: EmailService
    ) {}

    ngOnInit() {
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

    onSubmit(data: Email): void {
        console.log(data);
        this.FormData.disabled;
        this.emailService.sendEmail(data);
    }
}
