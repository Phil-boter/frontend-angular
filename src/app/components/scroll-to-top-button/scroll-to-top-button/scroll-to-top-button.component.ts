import { Component, OnInit } from '@angular/core';
import { interval as observableInterval } from 'rxjs';
import { takeWhile, scan, tap } from 'rxjs/operators';
@Component({
    selector: 'app-scroll-to-top-button',
    templateUrl: './scroll-to-top-button.component.html',
    styleUrls: ['./scroll-to-top-button.component.css'],
})
export class ScrollToTopButtonComponent implements OnInit {
    public showButton: boolean = false;

    constructor() {
        //this.showButton = false;@Inject(DOCUMENT) private document: Document
    }
    ngOnInit(): void {
        console.log('window');
    }

    public scrollToTop(el: { scrollTop: number }) {
        const duration = 600;
        const interval = 5;
        const move = (el.scrollTop * interval) / duration;
        observableInterval(interval)
            .pipe(
                scan((acc, curr) => acc - move, el.scrollTop),
                tap((position) => (el.scrollTop = position)),
                takeWhile((val) => val > 0)
            )
            .subscribe();
    }
}
