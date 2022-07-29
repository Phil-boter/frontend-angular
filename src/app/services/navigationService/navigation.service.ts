import { Injectable } from '@angular/core';

export interface NavigationLink {
    id: number;
    title: string;
    link: string;
    iconSrc: string;
    iconName: string;
    iconSize: string;
}

const navigationLinkList = [
    {
        id: 1,
        title: 'home',
        link: '',
        iconSrc: '../../../assets/home-outline.svg',
        iconName: 'home-outline',
        iconSize: 'large',
    },
    {
        id: 2,
        title: 'projects',
        link: 'project',
        iconSrc: '../../../assets/terminal-outline.svg',
        iconName: 'terminal-outline',
        iconSize: 'large',
    },
    {
        id: 3,
        title: 'contact',
        link: 'contact',
        iconSrc: '../../../assets/chatbubbles-outline.svg',
        iconName: 'chatbubbles-outline',
        iconSize: 'large',
    },
    {
        id: 4,
        title: 'email',
        link: 'email',
        iconSrc: '../../../assets/paper-plane-outline.svg',
        iconName: 'paper-plane-outline',
        iconSize: 'large',
    },
    {
        id: 5,
        title: 'about',
        link: 'about',
        iconSrc: '../../../assets/person-circle-outline.svg',
        iconName: 'person-circle-outline',
        iconSize: 'large',
    },
];

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    public navigationIsOpen: boolean = false;
    public linkList: NavigationLink[] = navigationLinkList;

    constructor() {}

    public openNavigation(): boolean {
        console.log('open');
        return (this.navigationIsOpen = true);
    }

    public closeNavigation(): boolean {
        console.log('closew');
        return (this.navigationIsOpen = false);
    }

    public provideNavigationLinkList(): NavigationLink[] {
        return this.linkList;
    }
}
