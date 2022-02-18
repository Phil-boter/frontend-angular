import { Component, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  	selector: 'app-navigation',
  	templateUrl: './navigation.component.html',
  	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	title:string = "The Nav";

 	@Input() navSlider = new EventEmitter();

  	constructor() { }

  	ngOnInit(): void {
  	}
    
  	openNavigation (e:Event){
      	const burger =  document.querySelector('.burger');
		const nav = document.querySelector('.nav-links');
		const navLinks = document.querySelectorAll('.nav-links li');
		nav?.classList.toggle('nav-active');
		//animation links
		navLinks.forEach((elm:any, index: number) => {
				if(!elm) {
					elm.style.animation = '';
				} else {  
					elm.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
				}
			});
			 // burger animation
			burger?.classList.toggle('toggle');		
	}
	

	closeNavigation (e:Event) {
		const nav = document.querySelector('.nav-links');
		const navLinks = document.querySelectorAll('.nav-links li');
		nav?.classList.remove('nav-active')
		navLinks.forEach((elm:any, index: number) => {
			    setTimeout(()=> {
					elm.style.animation = '';
				}, 500)		
		});
		
	}
}
