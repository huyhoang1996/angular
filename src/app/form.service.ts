import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Observable} from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class FormService {

  constructor(private messageService: MessageService) { 

  }

  getHeroes(): Observable<Hero[]>{
  	this.messageService.add('method getHeroes in form service'); 
  	return of(HEROES);
  }

  getHero(id: number):Observable<Hero>{
  	this.messageService.add('method getHero in form service'); 
	return of(HEROES.find(Hero => Hero.id === id));  	
  }

  getString(message: string):Observable<any>{
    this.messageService.add('method getString in form service'); 
    return of(message);
  }

}
