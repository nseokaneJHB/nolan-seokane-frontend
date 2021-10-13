import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	constructor() { }

	title: string = 'Basic Store CRUD with orders';
	description: string = 'Hi, I am Nolan Seokane from Soweto. I skateboard for fun and it is really really fun.';

	ngOnInit(): void {
	}

}
