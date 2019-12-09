import { Component, Input } from '@angular/core';
import { Description } from './../mockdata';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  @Input() public descr: Description;
}
