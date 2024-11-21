import telaInicial from '../../support/pageObjects/tela-inicial-pageObjects';

describe('Deletar items da lista', () => {
  beforeEach(() => {
    cy.visit('/');
    const todoItens = ["Maçã", "Banana", "Cenoura", "Coconut"];

    todoItens.forEach((item) => {
      telaInicial.inputText(item);
    });

    telaInicial.concluirItem();
  });

  it('Deletar um items', () => {
    telaInicial.deletarItem(); 
  });

});