import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public numero: number = 0;

  decrementar() {
    this.numero--;
  }

  incrementar() {
    this.numero++;



  
  }

}
