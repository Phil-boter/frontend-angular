import {
    Component,
    OnInit,
    OnDestroy,
    ElementRef,
    ViewChild,
    QueryList,
    ViewChildren,
    AfterViewInit,
    AfterViewChecked,
    SimpleChanges,
    Input,
} from '@angular/core';
import {
    Subscription,
    map,
    Observable,
    filter,
    switchMap,
    findIndex,
} from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';
import { LanguageService } from 'src/app/services/languageService/language.service';

import { ProjectService } from 'src/app/services/projectService/project.service';

@Component({
    selector: 'app-project-component',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, AfterViewChecked {
    @Input() project!: ProjectModel;
    @Input() isGerman: boolean = false;

    public projects: ProjectModel[] = [];
    public error = Subscription;
    private isLoading: boolean = false;
    public header: any = [];
    public observer!: IntersectionObserver;

    constructor(
        private langaugeService: LanguageService,
        private ref: ElementRef
    ) {}

    ngOnInit(): void {console.log(this.isGerman)}

    ngAfterViewChecked() {
        this.header = document.querySelectorAll('h2');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log("changes",changes)
    }

    public animateHeadline(status: boolean, index: number) {
        this.header = document.querySelectorAll('h2');
        if (this.header && status) {
            const item = this.header[index];
            let newHeader = '';
            let headerText = item.children[0].innerText.split('');
            headerText.map(
                (letter: any) =>
                    (newHeader +=
                        letter == ' '
                            ? `<span class='gap'></span>`
                            : `<span class='letter'>${letter}</span>`)
            );
            item.innerHTML = newHeader;
            console.log('item', item);

            let letters = document.querySelectorAll(`.letter`);
            letters.forEach((letter, idx) => {
                setTimeout(() => {
                    letter.classList.add('active');
                }, idx * 10);
            });
            //entry.target.children[0].classList.add(`active`);
        }
    }

    public get loading() {
        return this.isLoading;
    }

    // public animate() {
    //     // Create the observer
    //     if (this.list) {
    //         this.observer = new IntersectionObserver((entries) => {
    //             entries.forEach((entry: any) => {
    //                 if (entry.isIntersecting) {
    //                     console.log('is intersecting');
    //                     // do something if intersecting
    //                 } else {
    //                     // do something if not intersecting
    //                 }
    //             });
    //         });

    //         this.list.forEach((item: any) => {
    //             console.log('item', item);
    //             this.observer.observe(item);
    //         });
    //     }
    // }
}
