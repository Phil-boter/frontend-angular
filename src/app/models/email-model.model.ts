import { Email } from '../interfaces/email';
import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators,
    NgForm,
} from '@angular/forms';

export class EmailModel {
    public from: string;
    public subject: string;
    public text: string;
    public created_at: Date;

    public FormData!: FormGroup;

    constructor(
        from: string,
        subject: string,
        text: string,
        created_at: Date,
        private builder: FormBuilder
    ) {
        this.from = from;
        this.subject = subject;
        this.text = text;
        this.created_at = created_at;
    }

    public create(builder: FormBuilder) {
        console.log('create');
        this.FormData = builder.group({
            from: new FormControl('', [Validators.required]),
            subject: new FormControl('', [Validators.required]),
            text: new FormControl('', [Validators.required]),
            created_at: Date.now(),
        });
        return this.FormData;
    }
}
