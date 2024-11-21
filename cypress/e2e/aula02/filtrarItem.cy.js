import telaInicial from '../../support/pageObjects/tela-inicial-pageObjects';

describe('Validar os filtros da aplicação após a adição de itens', () => {
  beforeEach(() => {
    cy.visit('/');
    const todoItens = ["Maçã", "Banana", "Cenoura", "Coconut"];

    todoItens.forEach((item) => {
      telaInicial.inputText(item);
    });

    telaInicial.concluirItem();
  });

  it('Filtrar itens ativos', () => {
    telaInicial.filtrarItem('Active'); // 
  });

  it('Filtrar itens concluídos', () => {
    telaInicial.filtrarItem('Completed'); 
  });
});