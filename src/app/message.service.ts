import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { 
	  console.log("MessageService");
	}

  messages: string[]= [];
  
  add(messages: string){
  	this.messages.push(messages);
  }

  clear(){
  	this.messages = [];
  }
}
