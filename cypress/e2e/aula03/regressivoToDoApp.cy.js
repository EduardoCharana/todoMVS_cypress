
import telaInicial from '../../support/pageObjects/tela-inicial-pageObjects';

describe('Regressivo ToDo app', () => {
    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('validar a area label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?");
        });
    });

    context('Validar adição de itens', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('Adicionar mais de um item à lista', () => {
            const todoItens = ["Maça", "Banana", "Cenoura", "Coconut"];
    
            todoItens.forEach((item) => {
                telaInicial.inputText(item);
            });

            telaInicial.validarContador(4)

            
            
        });
    });

    context('Validar a conclusão de itens', () => {
        beforeEach(() => {
            cy.visit('/');
            var todoItens = ["Maça", "Banana", "Cenoura", "coconut"];
        
            todoItens.forEach(function(item, indice,array) {
              telaInicial.inputText(item);
            });
          });

          it('concluir um item na lista de Todo', () => {
            telaInicial.concluirItem();
            telaInicial.validarContador(3)
            
          });
        
    });

    context('Validar o filtro da aplicação', () => {
        beforeEach(() => {
            cy.visit('/');
            const todoItens = ["Maçã", "Banana", "Cenoura", "Coconut"];
        
            todoItens.forEach((item) => {
              telaInicial.inputText(item);
            });
        
            telaInicial.concluirItem();
          });

          it('validar lista ativos', () => {
            telaInicial.filtrarItem('Active')
            telaInicial.validarSizeToDo(3)
          });

          it('validar lista de itemns concluidos', () => {
            telaInicial.filtrarItem('Completed')
            telaInicial.validarSizeToDo(1)
          });
    
    });

    context('Validar a remoção de item', () => {
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
            telaInicial.validarSizeToDo(3)
          });
      
    });
});