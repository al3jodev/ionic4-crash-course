import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  films: Observable<any>;

  constructor(private navController: NavController, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.films = this.api.getFilms();
  }

  openDetalles(film) {
    const split = film.url.split('/');
    const filmId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/peliculas/${filmId}`);
  }

  goToPlanetas() {
    this.navController.navigateRoot(`/tabs/planetas`);
  }

}
