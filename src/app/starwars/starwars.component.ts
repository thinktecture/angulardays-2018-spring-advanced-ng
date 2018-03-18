import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {

  public person: any;

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // TODO: Subscribe to the router’s change
  }

}
