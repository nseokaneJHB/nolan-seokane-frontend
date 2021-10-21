import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private __http: HttpClient) { }

	// Define Base Url
	url: string = environment.url

	// Get All Data From Url
	async getAllSkillsFromUrl(){
		return await this.__http.get(`${this.url}/skills`).toPromise().then();
	}	

	// Get One Data From Url
	async getOneSkillFromUrl(id: number){
		return await this.__http.get(`${this.url}/skills/${id}`).toPromise();
	}

	// Get All Data From Url
	async getAllProjectsFromUrl(){
		return await this.__http.get(`${this.url}/projects`).toPromise();
	}	

	// Get One Data From Url
	async getOneProjectFromUrl(slug: string){
		return await this.__http.get(`${this.url}/projects/${slug}`).toPromise();
	}

	// Send Message To Url
	async sendMessageToUrl(email: any){
		return await this.__http.post(`${this.url}/contact/`, email).toPromise();
	}
}
