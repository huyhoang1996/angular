import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormService } from '../form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formService: FormService, private route: ActivatedRoute ) { }

  Superhero = 'Hoang';
  message: string ='';
  heroes: Hero[];
  hero: Hero;
 
  getHeroes(){
  	this.formService.getHeroes().subscribe(result=> this.heroes= result);
  }

  getHero(){
    //get path parameter
    const id = +this.route.snapshot.paramMap.get('id');
    this.formService.getHero(id).subscribe(result=> this.hero= result);
    console.log(this.hero);
  }
  
  getString(message: string){
    this.formService.getString(message).subscribe(result=> this.message= result);
    console.log(this.message);
  }

  clickMessage = '';

  onClickMe(mess: string) {
    this.clickMessage = mess;
  }

  passInput(event: any){
    this.clickMessage += event.target.value +' | ';
  }

  ngOnInit() {
    this.getHero();
  	this.getHeroes();
    this.getString('hoang');
  }

}
