import { Component, EventEmitter, OnInit, Input, QueryList, ElementRef, ViewChildren } from '@angular/core';

import { Subscription } from "rxjs";
import { ResizeService } from 'src/app/services/resizeService/resize.service';

@Component({
  	selector: 'app-navigation',
  	templateUrl: './navigation.component.html',
  	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	public isMobile:boolean = false;

	title:string = "The Nav";
	private windowWidth!:number;
    public navigationIsOpen: boolean = false;
    public resizeSubscription: Subscription = new Subscription

  	constructor(private resizeService: ResizeService) { }

  	ngOnInit(): void {}
	ngDoCheck() {
		this.isMobile = this.resizeService.isMobile();
	}
    
  	public openNavigation (){
		console.log("open");
        this.navigationIsOpen = true;
	}
	
	public closeNavigation () {
		console.log("closew");
		this.navigationIsOpen = false;	
	}

	ngOnDestroy() {
	}
}
