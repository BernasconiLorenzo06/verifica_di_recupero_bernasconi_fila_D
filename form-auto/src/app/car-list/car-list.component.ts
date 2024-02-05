import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  @Input() colore: HTMLInputElement;
  @Input() porte: HTMLInputElement;
  @Input() auto: HTMLInputElement;

}
