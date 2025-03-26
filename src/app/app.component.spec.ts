import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buzzfeed-clone';
  result: string | null = null;

  choosePower(power: string) {
    if (power === 'Raio-Lasers' || power === 'Explodir coisas' || power === 'Soltar raios mãos') {
      this.result = 'Você seria um VILÃO!';
    } else {
      this.result = 'Você seria um HERÓI!';
    }
  }
}