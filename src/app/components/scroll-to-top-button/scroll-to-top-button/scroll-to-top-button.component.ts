import {
    Component,
    HostListener,
    ChangeDetectionStrategy,
    Directive,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-scroll-to-top-button',
    templateUrl: './scroll-to-top-button.component.html',
    styleUrls: ['./scroll-to-top-button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollToTopButtonComponent implements OnInit {
    constructor(
        private viewPortScroller: ViewportScroller
    ) {}

    ngOnInit() {
       // window.addEventListener('scroll', this.scroll, true);
    }

    public scroll = (event: Event): void => {
        console.log("click scroll", event,     this.viewPortScroller.getScrollPosition())
        //this.viewPortScroller.scrollToAnchor('top');
        this.viewPortScroller.scrollToPosition([0,0])
    };

    ngOnDestroy() {
        //window.removeEventListener('scroll', this.scroll, true);
    }
}
