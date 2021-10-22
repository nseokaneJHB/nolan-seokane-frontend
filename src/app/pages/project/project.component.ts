import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

	
	constructor(private __activated: ActivatedRoute, private __api: ApiService, private __loader: NgxSpinnerService, private meta: Meta, private title: Title) {
		this.meta.addTags([
			{name: 'description', content: 'Project page of Nolan Seokane\'s web portfolio'},
			{name: 'author', content: 'Nolan Seokane'},
			{name: 'keywords', content: 'Nolan, Seokane, Angular, Django, Portfolio, Project'}
		]);
		this.setTitle('Project');
	}

	public setTitle(newTitle: string) {
		this.title.setTitle( `${this.title.getTitle()} - ${newTitle}` );
	}

	project: any = {}

	// Execute on load
	async load(){
		const slug: any = this.__activated.snapshot.params;
		
		await this.__api.getOneProjectFromUrl(slug.slug).then(async(res: any) => {

			// Structure Skills
			for (const skill in res.skills) {
				res.skills[skill] = await this.__api.getOneSkillFromUrl(res.skills[skill]).catch((err: any) => {
					console.log(err);
				});
			}			

			this.project = await res;

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

}
