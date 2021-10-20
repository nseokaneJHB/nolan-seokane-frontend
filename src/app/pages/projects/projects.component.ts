import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	constructor(private __api: ApiService) { }
	projects: any = []
	skill: any;

	// Execute on load
	async load(){
		this.projects = await this.__api.getAllProjectsFromUrl();
	}

	ngOnInit(): void {
		this.load();
	}

	async searchProjectWithSkill(e: any){
		if (await e.target.value === '') return this.load();
		this.projects = await this.projects.filter((project: any) => project.title.toLowerCase().match(e.target.value.toLowerCase()));
	}
}
