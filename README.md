
# BuzzFeed Clone
Um aplicativo de quiz simples construido com Angular. O objetivo do projeto e criar um clone do BuzzFeed onde o usuario responde a 4 perguntas para descobrir se seria um heroi, vilao ou neutro, com uma interface estilizada e interativa.
## Funcionalidades
- Quiz com 4 Perguntas: O usuario responde a 4 perguntas com opcoes que influenciam o resultado final. - Sistema de Pontuacao: Cada resposta adiciona ou subtrai pontos (respostas "boas" somam pontos, "ruins" subtraem). - Resultado Final: No final, o usuario descobre se e "Heroi", "Vilao" ou "Neutro" com base no score. - Indicador de Progresso: Mostra "Pergunta X de 4" para indicar o progresso. - Botao de Reiniciar: Permite jogar novamente apos ver o resultado. - Interface Estilizada: Interface simples e responsiva com CSS customizado. - Transicao Suave: Animacao de fade-in nas perguntas e opcoes.
## Como Rodar o Projeto
Siga os passos abaixo para rodar o projeto localmente.
### Pre-requisitos
- Node.js 18 ou superior (para usar o npm e o Angular CLI) - Git (para clonar o repositorio, se aplicavel) - Project IDX (ou outro ambiente de desenvolvimento)
### Passos
1. Crie um novo projeto Angular no Project IDX: No Project IDX, clique em "Create New Project" e escolha o template Angular. Isso cria um projeto standalone (sem app.module.ts, ja que estamos usando Angular 17+). 2. Inicie o servidor de desenvolvimento: ```bash ng serve ``` 3. Acesse o app: Abra o navegador e acesse http://localhost:4200.
## Etapas de Desenvolvimento
### Etapa 1: Configuracao Inicial e Estrutura Basica
- Crie um novo projeto Angular no Project IDX, que ja gera uma estrutura standalone. - Limpe o arquivo src/app/app.component.html para adicionar a estrutura do quiz. - Adicione estilizacao basica no src/app/app.component.css para o layout (fundo escuro, botoes verdes, etc.).
### Etapa 2: Adicionando Interatividade e Multiplas Perguntas
- Atualize o src/app/app.component.ts para gerenciar 4 perguntas, com um sistema de pontuacao. - Configure a logica para avancar entre perguntas e calcular o resultado final (Heroi, Vilao ou Neutro). - Adicione um botao de reiniciar para o usuario jogar novamente.
### Etapa 3: Correcao de Erros
- Resolva o erro de diretivas (*ngIf e *ngFor) importando o CommonModule diretamente no src/app/app.component.ts, ja que o projeto e standalone.
### Etapa 4: Melhorias na Experiencia do Usuario
- Adicione um indicador de progresso ("Pergunta X de 4") no src/app/app.component.html. - Inclua uma animacao de fade-in para as perguntas e opcoes no src/app/app.component.css.
- 
## Tecnologias Usadas
- Angular 17: Framework para criar aplicativos web. - TypeScript: Linguagem usada com Angular. - CSS: Para estilizacao customizada. - Project IDX: Ambiente de desenvolvimento usado para criar o projeto.
## Proximos Passos
Aqui estao algumas ideias pra melhorar o projeto: - Adicionar Mais Perguntas: Incluir mais rodadas ou temas diferentes (ex.: "Que tipo de vilao voce seria?"). - Melhorar a UI: Adicionar imagens ou icones para cada opcao. - Persistencia de Dados: Salvar os resultados em localStorage para o usuario ver seu historico. - Animacoes Avancadas: Adicionar transicoes mais elaboradas com Angular Animations. - Testes: Adicionar testes unitarios para o componente usando Jasmine e Karma.
## Contribuicao
Se tu quiser contribuir pro projeto, sinta-se a vontade pra abrir um pull request ou reportar issues no GitHub! 1. Faca um fork do repositorio. 2. Crie uma branch pra tua feature: ```bash git checkout -b minha-feature ``` 3. Faca commit das tuas alteracoes: ```bash git commit -m "Adiciona minha feature" ``` 4. Faca push da branch: ```bash git push origin minha-feature ``` 5. Abra um pull request no GitHub.
## Licenca
Este projeto e licenciado sob a MIT License.
---
Feito por Pedro Savio.
