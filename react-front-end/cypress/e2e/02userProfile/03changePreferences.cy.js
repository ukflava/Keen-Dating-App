context('Edit profile', () => {
  beforeEach(() => {
    cy.visit("/")
    const login = 'ce@gmail.com'
    const password = '123'
  
    cy.get('input[placeholder="Username/Email"]').type(`${login}{enter}`);
    cy.get('input[placeholder="Password"]').type(`${password}{enter}`).wait(500)
  })


  it("can edit profile", () => {

    cy.visit("/preferences")
    .should('have.text', 'Dating Preferences')
    cy.get('div').contains('I want to meet...').click().wait(300)
    .should('have.text', 'Woman')
    .should('have.text', 'Everyone')
    cy.get('input[type="radio"]').check('3').wait(300);
    cy.contains("Everyone").should('be.visible');
    cy.get('div').contains('Someone who drinks...').click().wait(300)
    .should('have.text', 'Socially')
    .should('have.text', 'Yes')
    cy.get('input[type="radio"]').check('2').wait(300);
    cy.contains("Sometimes").should('be.visible');






    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('View').click().wait(300);
    cy.contains("bio changed").should('be.visible');
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.get('textarea').contains('University').type(`${text2}{enter}`).wait(300);
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('View').click().wait(300);
    cy.contains("galaxy").should('be.visible');
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.get('div').contains('I drink').click().wait(300);
    cy.get('div').contains('Never').click().wait(300)
    cy.contains("Never").should('be.visible');
     });




})
