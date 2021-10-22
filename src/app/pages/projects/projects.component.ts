import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

	constructor(private __api: ApiService, private __loader: NgxSpinnerService, private meta: Meta, private title: Title) {
		this.meta.addTags([
			{name: 'description', content: 'Projects page of Nolan Seokane\'s web portfolio'},
			{name: 'author', content: 'Nolan Seokane'},
			{name: 'keywords', content: 'Nolan, Seokane, Angular, Django, Portfolio, Projects'}
		]);
		this.setTitle('Projects');
	}

	public setTitle(newTitle: string) {
		this.title.setTitle( `${this.title.getTitle()} - ${newTitle}` );
	}

	projects: any = []
	skill: any;

	// Execute on load
	async load(){
		await this.__api.getAllProjectsFromUrl().then(async(res: any) => {
			this.projects = await res;

		}).finally(() => {
			setTimeout(async() => {
				await this.__loader.hide();
			}, 500);
		}).catch((err: any) => {
			console.log(err);
		});
	}

	ngOnInit(): void {
		this.__loader.show();
		this.load();
	}

	async searchProjectWithSkill(e: any){
		if (await e.target.value === '') return this.load();
		this.projects = await this.projects.filter((project: any) => project.title.toLowerCase().match(e.target.value.toLowerCase()));
	}
}
