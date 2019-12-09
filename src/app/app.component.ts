import { Place } from './mockdata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public currentPlace: Place;
  public SelectPlace(place: Place): void {
    this.currentPlace = place;
  }
  public ngOnInit(): void {}
}
