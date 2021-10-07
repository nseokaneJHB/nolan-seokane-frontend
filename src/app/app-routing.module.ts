import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ===================================================== Pages =====================================================
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },

	{ path: 'projects', component: ProjectsComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '', component: LandingComponent },

	{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
