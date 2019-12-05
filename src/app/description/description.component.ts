import { Component, Input } from "@angular/core";
import { Description } from "../app.interface";
@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.css"]
})
export class DescriptionComponent {
  @Input() description: Description;
}
