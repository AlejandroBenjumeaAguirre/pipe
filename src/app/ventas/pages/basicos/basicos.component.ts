import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'alejandro';
  nombreUpper: string = 'ALEJANDRO';
  nombreComleto: string = 'aleJanDro bEnJuMeA';

  fecha: Date = new Date(); //fecha actual
}
