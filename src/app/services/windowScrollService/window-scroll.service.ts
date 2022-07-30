import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WindowScrollService {
    scrollY = new BehaviorSubject(0);
    scrollY$ = this.scrollY.asObservable();

    constructor(private viewPortScroller: ViewportScroller) {}

    public updateScrollY(): void {
        console.log('scroll', this.viewPortScroller.getScrollPosition());
        //return this.scrollY.next(value);
    }

    public getScrollHeight(): number {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
    }
}
