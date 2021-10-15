import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	constructor() { }

	contactForm = new FormGroup({
		subject: new FormControl(''),
		message: new FormControl(''),
		email: new FormControl(''),
		name: new FormControl(''),
	})

	ngOnInit(): void {}

	sendEmail(){
		console.log(this.contactForm.value);
	}
}
