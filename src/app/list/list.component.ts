import { Component, Output, EventEmitter } from '@angular/core';
import { Place, places } from '../mockdata';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output() public selectPlace: EventEmitter<Place> = new EventEmitter();
  public places = places;
  public onClick(placeId: number) {
    this.selectPlace.emit(this.places.find(place => place.id === placeId));
  }
}
