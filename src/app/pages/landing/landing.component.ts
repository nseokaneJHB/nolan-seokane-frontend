import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { NgxSpinnerService } from 'ngx-spinner';

import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {

	constructor(private __api: ApiService, private __loader: NgxSpinnerService, private meta: Meta, private title: Title) {
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

	skills: any[] = [];

	// Execute on load
	async load(){
		this.__api.getAllSkillsFromUrl().then((res: any[]) => {
			this.skills = res.map((skill: any) => {
				return {
					id: skill.id,
					skill: skill.skill
				}
			})
		}).finally(() => {
			this.__loader.hide();
		}).catch((err: any) => {
			console.log(err);
		});
	}

	ngOnInit(): void {
		this.__loader.show();
		this.load();
	}
}
