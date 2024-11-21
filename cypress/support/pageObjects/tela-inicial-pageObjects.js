import { ELEMENTS, ITEMS, FILTROS } from '../elements/tela-inicial-elements';

class TelaInicial {
  inputText(dado) {
    cy.get(ELEMENTS.inputToDo).type(dado).type('{enter}');
  }

  concluirItem() {
    cy.get(ITEMS.buttonConcluirItem)
      .first()
      .click();
  }

  filtrarItem(menu) {
    cy.get(FILTROS.filtroTodo, { timeout: 10000 }) 
      .should('be.visible') 
      .contains(menu) 
      .click(); 
  }

  deletarItem() {
    cy.get(FILTROS.listaItens)
    .first()
    .find('button')
    .invoke('show')
    .click()
  }


  validarInput(texto) {
    cy.get(ELEMENTS.inputToDo)
      .should('have.attr', 'placeholder')
      .and('include', texto); 
  }


  validarContador(numero){
    cy.get(FILTROS.contador)
    .find('strong')
    .contains(numero)
  }

  validarSizeToDo(numero) {
    cy.get(ITEMS.validarListaItems)
      .should('have.length', numero);
  }


}

export default new TelaInicial();