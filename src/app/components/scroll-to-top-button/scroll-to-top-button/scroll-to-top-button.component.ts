import {
    Component,
    HostListener,
    ChangeDetectionStrategy,
    Directive,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { WindowScrollService } from 'src/app/services/windowScrollService/window-scroll.service';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-scroll-to-top-button',
    templateUrl: './scroll-to-top-button.component.html',
    styleUrls: ['./scroll-to-top-button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollToTopButtonComponent implements OnInit {
    constructor(
        private windowScrolService: WindowScrollService,
        private viewPortScroller: ViewportScroller
    ) {}

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);
    }

    scroll = (event: Event): void => {
        const body = document.getElementById('body');
    };

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }
}
