import { places } from './mockdata';
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentPlace: object;
  places = places;
  click(placeId: number) {
    this.currentPlace = this.places.find(place => place.id === placeId);
  }
}
