import {
    Component,
    EventEmitter,
    OnInit,
    Input,
    QueryList,
    ElementRef,
    ViewChildren,
} from '@angular/core';

import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modalService/modal.service';
import {
    NavigationLink,
    NavigationService,
} from 'src/app/services/navigationService/navigation.service';
import { ResizeService } from 'src/app/services/resizeService/resize.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
    public isMobile: boolean = false;

    public title: string = 'The Nav';
    private windowWidth!: number;
    public navigationIsOpen: boolean = false;
    public resizeSubscription: Subscription = new Subscription();
    public navigationLinks: NavigationLink[] = [];

    constructor(
        private resizeService: ResizeService,
        private navigationService: NavigationService,
        private modalService: ModalService
    ) {}

    ngOnInit(): void {
        this.showNavigationLinks();
    }
    ngDoCheck() {
        this.isMobile = this.resizeService.isMobile();
    }

    public open(): void {
        this.navigationIsOpen = this.navigationService.openNavigation();
    }

    public close(): void {
        this.navigationIsOpen = this.navigationService.closeNavigation();
    }

    private moveBurger() {
        const animateNavigation = document.querySelector(
            '.nav-desktop-container'
        );
    }

    public showNavigationLinks(): void {
        this.navigationLinks =
            this.navigationService.provideNavigationLinkList();
    }

    public openEmailModal() {
        this.modalService.openEmailModal();
    }

    ngOnDestroy() {}
}
