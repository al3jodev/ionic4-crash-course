
import { ApiService } from './../../services/api.service';
import { FavoriteService } from './../../services/favorite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-detalle-peliculas',
  templateUrl: './detalle-peliculas.page.html',
  styleUrls: ['./detalle-peliculas.page.scss'],
})
export class DetallePeliculasPage implements OnInit {

  filmId = null;
  film: any;
  isFavorite = false;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favoriteService: FavoriteService,
              private emailComposer: EmailComposer) { }

  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getFilm(this.filmId).subscribe(res => {
      this.film = res;
    });

    this.favoriteService.isFavorite(this.filmId).then(isFav => {
      this.isFavorite = isFav;
    });
  }

  favoriteFilm() {
    this.favoriteService.favoriteFilm(this.filmId).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoriteFilm() {
    this.favoriteService.unfavoriteFilm(this.filmId).then(() => {
      this.isFavorite = false;
    });
  }

  shareFilm() {
    const email = {
      to: 'saimon@devdactic.com',
      subject: 'I love this one: ' + this.film.title,
      body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };
    this.emailComposer.open(email);
  }

}
