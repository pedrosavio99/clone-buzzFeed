import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-root',
  standalone: true, // Confirme que o componente é standalone
  imports: [CommonModule], // Adicione o CommonModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buzzfeed-clone';
  currentQuestion: number = 0;
  score: number = 0;
  result: string | null = null;

  questions = [
    {
      text: 'Qual super poder você escolheria?',
      options: [
        { text: 'Raio-Lasers', value: -1 },
        { text: 'Explodir coisas', value: -1 },
        { text: 'Curar feridas', value: 1 },
        { text: 'Voar', value: 1 },
        { text: 'Soltar raios mãos', value: -1 }
      ]
    },
    {
      text: 'O que você faria ao encontrar um inimigo?',
      options: [
        { text: 'Atacar sem piedade', value: -1 },
        { text: 'Tentar negociar', value: 1 },
        { text: 'Fugir e planejar', value: 0 },
        { text: 'Destruir tudo ao redor', value: -1 }
      ]
    },
    {
      text: 'Qual é o seu objetivo principal?',
      options: [
        { text: 'Proteger os inocentes', value: 1 },
        { text: 'Dominar o mundo', value: -1 },
        { text: 'Ficar rico', value: 0 },
        { text: 'Vingar-se de alguém', value: -1 }
      ]
    },
    {
      text: 'Como você usa seu tempo livre?',
      options: [
        { text: 'Ajudando os outros', value: 1 },
        { text: 'Planejando algo maligno', value: -1 },
        { text: 'Relaxando sem fazer nada', value: 0 },
        { text: 'Treinando para lutar', value: 0 }
      ]
    }
  ];

  chooseOption(value: number) {
    this.score += value;
    this.currentQuestion++;

    if (this.currentQuestion >= this.questions.length) {
      this.showResult();
    }
  }

  showResult() {
    if (this.score > 0) {
      this.result = 'Você seria um HERÓI!';
    } else if (this.score < 0) {
      this.result = 'Você seria um VILÃO!';
    } else {
      this.result = 'Você seria NEUTRO, nem herói, nem vilão!';
    }
  }

  reset() {
    this.currentQuestion = 0;
    this.score = 0;
    this.result = null;
  }
}