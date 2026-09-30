import { Component, signal } from '@angular/core';
import { Calculo } from './calculo/calculo';
@Component({
  selector: 'app-root',
  imports: [ Calculo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculadora');
}
