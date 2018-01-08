import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
	Superhero = 'Hoang';
	HeroObj: Hero = {
		id: 1,
		name: 'tran lam',
	}

  heroes: Hero[];

  selectedHero: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  
  constructor( private heroService: HeroService) { 
     console.log("HeroesComponent");
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  //get data when herosevice return
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  createHero(name: string):void{
    this.heroService.createHero({name} as Hero).subscribe(hero => this.heroes.push(hero));
  }

  deleteHero(hero:Hero| number):void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeroes();
    }

}
