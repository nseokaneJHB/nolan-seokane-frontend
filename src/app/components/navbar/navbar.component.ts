import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor() { }

	resume: any = 'https://nolan-seokane.s3.us-east-2.amazonaws.com/media/resume.pdf';

	ngOnInit(): void {}
}
