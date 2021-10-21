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
		this.__loader.show();

		this.__api.sendMessageToUrl(this.contactForm.value).then((res: any) => {

			setTimeout(async() => {
				this.contactForm.reset();
				await this.__loader.hide();
			}, 500);

			this.__toast.success(res.message, 'Success');
			this.ngOnInit();
		}).catch((err: any) => {
			setTimeout(async() => {
				await this.__loader.hide();
			}, 500);

			if (err.status === 500) return this.__toast.error('Oops! something went wrong. Please try again later', 'Error');
			if (err.status === 503) return this.__toast.error(err.error.message, 'Error');
			if (err.status === 400) {
				this.form_error = err.error;
			}
		});
	}
}
