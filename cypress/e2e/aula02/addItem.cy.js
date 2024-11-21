


import telaInicial from '../../support/pageObjects/tela-inicial-pageObjects';

describe('Adicionar itens na minha Todo', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Abrir o site e adicionar item', () => {
    telaInicial.inputText("dado1");
    telaInicial.inputText("dado2")
  });


  it('Adicinar mais de um item à lista', () => {
      
        var todoItens = ["Maça", "Banana", "Cenoura", "coconut"]

        todoItens.forEach(function(item, indice,array ){
            telaInicial.inputText(item)
        })





  });








});


