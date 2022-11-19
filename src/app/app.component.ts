import { ViewportScroller } from '@angular/common';
import {
    AfterViewInit,
    ApplicationRef,
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'frontend-angular';

    constructor(private appRef: ApplicationRef) {}

    ngAfterViewInit(): void {}

    ngOnInit(): void {
        // this.appRef.isStable.subscribe((isStable) => {
        //     console.log('app is stable', isStable);
        // });
    }
}
