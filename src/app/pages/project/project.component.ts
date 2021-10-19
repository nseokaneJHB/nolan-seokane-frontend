import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

	
	constructor(private __activated: ActivatedRoute, private __api: ApiService) { }
	project: any = {}

	// Execute on load
	async load(){
		const slug: any = this.__activated.snapshot.params;
		this.project = await this.__api.getOneProjectFromUrl(slug.slug);

		// Structure Skills
		for (const skill in this.project.skills) {
			this.project.skills[skill] = await this.__api.getOneSkillFromUrl(this.project.skills[skill]);
		}

		console.log(this.project);
	}

	ngOnInit(): void {
		this.load();
	}

}
