import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }	from './dashboard/dashboard.component';
import { HeroDetailComponent }	from './hero-detail/hero-detail.component';
import { FormComponent }	from './form/form.component';
import { SupermanFormComponent }	from './superman-form/superman-form.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'form/:id', component: FormComponent },
  { path: 'form', component: FormComponent },
  { path: 'superman', component: SupermanFormComponent },
  { path: 'superman/:id', component: SupermanFormComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//default routing
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}


