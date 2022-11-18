import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators,
    NgForm,
} from '@angular/forms';
import { EmailService } from 'src/app/services/emailService/email.service';
import { ModalController } from '@ionic/angular';
import { EmailModalComponent } from 'src/app/components/emailModal/email-modal.component';
import { OverlayEventDetail } from '@ionic/core';
import { ModalService } from 'src/app/services/modalService/modal.service';
import { Email } from 'src/app/interfaces/email';

@Component({
    selector: 'app-email-page',
    templateUrl: './email-page.component.html',
    styleUrls: ['./email-page.component.css'],
})
export class EmailPageComponent implements OnInit {
    public FormData!: FormGroup;
    public isLoading: boolean = false;
    private email!: Email;

    constructor(private modalService: ModalService) {}

    ngOnInit() {}

    public async openEmailModal() {
        this.modalService.openEmailModal();
    }
}
