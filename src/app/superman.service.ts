import { Injectable } from '@angular/core';
import { Superman } from './superman';
import { supermans } from './mock-superman';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response } from "@angular/http";
import * as _ from 'lodash';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable()
export class SupermanService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

    


  getSupermans(): Observable<Superman[]>{
    var supermans = this.http.get<Superman[]>('http://localhost:8000/api/user/');
    return supermans;
  }

  createSuperman(superman: Superman): Observable<Superman>{
    var body = JSON.stringify(superman);
    console.log(body);
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  	var url = `http://localhost:8000/api/user/`;
    var result = this.http.post<Superman>( url, superman, { headers: headers});
  	return result;
  }

  getSuperman(id: number): Observable<Superman>{
    console.log('sevice ', id);
    var url = `http://localhost:8000/api/user/${id}`;
    var superman = this.http.get<Superman>( url);
  	return superman;
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


