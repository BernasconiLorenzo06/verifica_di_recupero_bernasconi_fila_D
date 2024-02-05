import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  autoTot(colore: HTMLInputElement, porte: HTMLInputElement, auto: HTMLInputElement): boolean {
    console.log (colore.value,porte.value,auto.value); 
    return false;

  }
}
