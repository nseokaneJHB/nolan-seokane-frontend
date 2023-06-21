import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ========================================== Local Modules ==========================================
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ========================================== Pages ==========================================
import { ProjectsComponent } from './pages/projects/projects.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';

// ========================================== Components ==========================================
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// ========================================== External Modules ==========================================
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { SocialsComponent } from './components/socials/socials.component';


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		LandingComponent,
		ContactComponent,
		ProjectComponent,
		ProjectsComponent,
  SocialsComponent,
	],
	imports: [
		FormsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgxSpinnerModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			positionClass: 'toast-top-center',
			progressAnimation: 'decreasing',
			preventDuplicates: true,
			tapToDismiss: true,
			progressBar: true,
			closeButton: true,
			timeOut: 5000,
		}),
	],
	providers: [],
	bootstrap: [AppComponent]

})
export class AppModule { }
