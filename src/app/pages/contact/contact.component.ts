import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	constructor(private __api: ApiService, private __loader: NgxSpinnerService, private __toast: ToastrService) { }

	contactForm = new FormGroup({
		subject: new FormControl(''),
		message: new FormControl(''),
		email: new FormControl(''),
		name: new FormControl(''),
	})

	form_error: any = {}

	ngOnInit(): void {}

	sendEmail(){
		if (this.contactForm.value.name.trim() === "") return this.form_error = { name: "Please provide a name" };
		if (this.contactForm.value.subject.trim() === "") return this.form_error = { subject: "Please provide a the subject" };
		if (this.contactForm.value.message.trim() === "") return this.form_error = { message: "Please provide a message" };
		if (this.contactForm.value.email.trim() === "") return this.form_error = { email: "Please provide an email" };

		const full_name = this.contactForm.value.name.split(" ");
		const subject = this.contactForm.value.subject.split(" ");

		this.contactForm.patchValue({ 
			...this.contactForm.value,
			subject: subject.map((sub: any) => sub[0].toUpperCase() + sub.substring(1)).join(" "),
			name: full_name.map((name: any) => name[0].toUpperCase() + name.substring(1)).join(" ") 
		})

		this.__loader.show();

		this.__api.sendMessageToUrl(this.contactForm.value).then(() => {
			setTimeout(async() => {
				await this.__loader.hide();
			}, 500);
		}).finally(() => {
			this.__toast.success('Hello world!', 'Toastr fun!');
		});
	}
}
