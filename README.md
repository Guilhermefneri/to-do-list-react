# ToDoList

Este é um projeto de estudo desenvolvido em React, com o objetivo de aprimorar habilidades em gerenciamento de estado, manipulação do DOM e persistência de dados no navegador. O componente permite ao usuário adicionar, deletar e reordenar tarefas de forma simples e intuitiva.

## Funcionalidades

- **Adicionar Tarefa**: O usuário pode digitar um texto no campo de entrada e adicioná-lo à lista.
- **Deletar Tarefa**: Cada tarefa possui um botão "Delete" para removê-la da lista.
- **Mover Tarefa**: As tarefas podem ser reorganizadas movendo-as para cima ou para baixo usando os botões de seta ⬆ e ⬇.
- **Persistência de Dados**: As tarefas são armazenadas no localStorage para que não sejam perdidas ao recarregar a página.

## Tecnologia Utilizada

- **React**: Biblioteca JavaScript para construção de interfaces dinâmicas.
- **Hooks do React**:
  - `useState`: Gerencia o estado da lista de tarefas.
  - `useEffect`: Carrega e salva tarefas automaticamente no localStorage.
- **localStorage**: API do navegador utilizada para armazenar as tarefas localmente.

## Objetivo do Projeto

Este projeto foi criado como parte de um estudo em React, com foco em:

- Entender e aplicar os conceitos de estado e ciclo de vida de componentes.
- Praticar a utilização de hooks (`useState` e `useEffect`).
- Aprender a manipular dados armazenados no navegador com `localStorage`.
- Melhorar a organização e reatividade da interface.

## Como Clonar e Executar o Projeto

### Clonar o repositório:

```bash
git clone https://github.com/Guilhermefneri/to-do-list-react.git
cd seu-repositorio
```
### Instalar as dependências:

```bash
npm install
```
### Executar o projeto:
```bash
npm run dev
```
Isso iniciará o servidor de desenvolvimento e o projeto poderá ser acessado no navegador em http://localhost:3000/.
