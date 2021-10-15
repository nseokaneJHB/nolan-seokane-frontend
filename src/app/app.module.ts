import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ========================================== Pages ==========================================
import { ProjectsComponent } from './pages/projects/projects.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';

// ========================================== Components ==========================================
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// ========================================== External Libraries ==========================================
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		LandingComponent,
		ContactComponent,
		ProjectComponent,
		ProjectsComponent,
	],
	imports: [
		FormsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgxSpinnerModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent]

})
export class AppModule { }
