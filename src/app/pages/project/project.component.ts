import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

	
	constructor(private __activated: ActivatedRoute, private __api: ApiService, private __loader: NgxSpinnerService) { }
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
