import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {

  public person$: Observable<any>;

  constructor(private _activatedRoute: ActivatedRoute, private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this.person$ = this._activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this._httpClient.get(`https://swapi.co/api/people/${id}`))
    );
  }

}
