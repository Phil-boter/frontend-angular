import { Injectable, Input } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    public isLoading: boolean = false;

    constructor() {}

    public set setLoadingStatus(value: boolean) {
        console.log('set', this.isLoading);
        this.isLoading = !!value;
    }

    public get loadingStatus(): boolean {
        console.log('get ', this.isLoading);
        return this.isLoading;
    }
}

// export class SetterComponent {
//     constructor(private cdr: ChangeDetectorRef) {}

//     /** @ignore */
//     private isDivShowing = false;

//     @Input() set showDiv(value: boolean) {
//         this.isDivShowing = !!value;
//         this.cdr.markForCheck();
//     }
//     get showDiv() {
//         return this.isDivShowing;
//     }
// }
