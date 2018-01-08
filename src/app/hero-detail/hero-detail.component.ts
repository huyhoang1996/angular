import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	// hero: Hero= {
	// 	id : 2,
	// 	name : 'hoang'
	// }

	@Input() hero: Hero;

  constructor(  private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) 
  { 
      console.log("HeroDetailComponent");
  }

  getHero(): void {
    //get path parameter
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  update():void {
      this.heroService.updateHero(this.hero).subscribe();
  }

   goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getHero();
  }

}
