import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	constructor(private __api: ApiService, private __loader: NgxSpinnerService) { }
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
