import telaInicial from '../../support/pageObjects/tela-inicial-pageObjects';

describe('Concluir items na lista de ToDo', () => {
  beforeEach(() => {
    cy.visit('/');
    var todoItens = ["Maça", "Banana", "Cenoura", "coconut"];

    todoItens.forEach(function(item, indice,array) {
      telaInicial.inputText(item);
    });
  });

  it('concluir um item na lista de Todo', () => {
    telaInicial.concluirItem();
  });
});