import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html'
})
export class LandingComponent {

	constructor(private meta: Meta, private title: Title) {
		this.meta.addTags([
			{name: 'description', content: 'Landing page of Nolan Seokane\'s web portfolio'},
			{name: 'author', content: 'Nolan Seokane'},
			{name: 'keywords', content: 'Nolan, Seokane, Angular, Django, Portfolio, Profile'}
		]);
		this.setTitle('Home');
	}

	public setTitle(newTitle: string) {
		this.title.setTitle( `${this.title.getTitle()} - ${newTitle}` );
	}
}
