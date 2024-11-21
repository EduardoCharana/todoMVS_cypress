import telaInicial from '../../support/pageObjects/tela-inicial-pageObjects'

describe('Acessar pagina do todomvc', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
    telaInicial.inputText()
  })
})



