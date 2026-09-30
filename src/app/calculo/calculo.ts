import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculo',
  imports: [FormsModule],
  templateUrl: './calculo.html',
  styleUrl: './calculo.css',
})
export class Calculo {

display = '';


botao(value: string): void {
  this.display = this.display + value;
  }

clear(): void {
  this.display = '';
  }

calculate(): void {
  try {
    this.display = String(eval(this.display));
  } catch{
    this.display = 'Error';
  }
}


@HostListener('window:keydown', ['$event'])
pegarTeclado(event: KeyboardEvent): void{
  const tecla = event.key

  if('0123456789+-*/.'.includes(tecla)){
      this.botao(tecla);
    }
  else if(tecla === 'Enter'){
      this. calculate();
    }
  else if(tecla === 'Backsapce' || tecla === 'Escape') {
      this.clear()
    }
  }
}
    