//AppModule
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';// to use NgModel
import { NgModule } from '@angular/core';

//component in project
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
//the In-memory Web API is intercepting those requests
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { FormComponent } from './form/form.component';
import { FormService } from './form.service';
import { SupermanFormComponent } from './superman-form/superman-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SupermanService } from './superman.service';


@NgModule({//metadata, declare component
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    FormComponent,
    SupermanFormComponent
  ],
  imports: [ //declare module
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     HttpClientModule,
     ReactiveFormsModule,
     // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
     // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [HeroService, MessageService, InMemoryDataService, FormService, SupermanService],
  bootstrap: [AppComponent] //show component in server
})
export class AppModule { }
