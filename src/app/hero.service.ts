import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { 
  		console.log("HeroService");
  }

 //  getHeroes(): Hero[] {
	//   return HEROES;
	// }

	private heroesUrl = 'api/heroes';  // URL to web api

	//return data
	getHeroes(): Observable<Hero[]> {
		// this.messageService.add('Many Heroes fetch data'); 
	  // return of(HEROES);

	  /** GET heroes from the server */
	  return this.http.get<Hero[]>(this.heroesUrl).pipe(
		  	tap(heroes => this.log(`fetched heroes`)),
	      	catchError(this.handleError('getHeroes', []))
	    );	
	}

	getHero(id: number): Observable<Hero>{
		// this.messageService.add('A Hero fetch data'); 
		// return of(HEROES.find(hero => hero.id === id));

		/** GET heroes from the server */
		const url = `${this.heroesUrl}/${id}`;
		return this.http.get<Hero>(url).pipe(
		    tap(_ => this.log(`fetched hero id=${id}`)),
		    catchError(this.handleError<Hero>(`getHero id=${id}`))
		 );
	}


	updateHero(hero: Hero): Observable<any>{
		const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
		/** GET heroes from the server */
		return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
		    tap(_ => this.log(`update hero id=${hero.id}`)),
		    catchError(this.handleError<Hero>(`getHero id=${hero.id}`))
		 );
	}

	createHero(hero: Hero): Observable<any>{
		const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
		/** GET heroes from the server */
		return this.http.post(this.heroesUrl, hero, httpOptions).pipe(
		    tap(_ => this.log(`create hero id=${hero.id}`)),
		    catchError(this.handleError<Hero>(`getHero id=${hero.id}`))
		 );
		
	}
	/** DELETE: delete the hero from the server */
	deleteHero (hero: Hero|number): Observable<any> {
	  const id = typeof hero === 'number' ? hero : hero.id;
	  const url = `${this.heroesUrl}/${id}`;
	  const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

	  return this.http.delete<Hero>(url, httpOptions).pipe(
	    tap(_ => this.log(`deleted hero id=${id}`)),
	    catchError(this.handleError<Hero>('deleteHero'))
	  );
	}

	searchHeroes (name: string): Observable<Hero[]>{
		if (!name.trim()){
			return of([]);
		}
		const url = `api/heroes/?name=${name}`;
		return this.http.get<Hero[]>(url).pipe(
		    tap(_ => this.log(`get hero name =${name}`)),
		    catchError(this.handleError<Hero[]>(`get hero name =${name}`))
		);
	}



	private log(message: string) {
	  this.messageService.add('HeroService: ' + message);
	}

		/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {
	 
	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead
	 
	    // TODO: better job of transforming error for user consumption
	    this.log(`${operation} failed: ${error.message}`);
	 
	    // Let the app keep running by returning an empty result.
	    return of(result as T);
	  };
}
}
