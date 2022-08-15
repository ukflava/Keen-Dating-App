describe("Visitor can enter login page", () => {

  it("should visit root", () => {
    cy.visit("/")
    .should('not.have.text', 'Preferences')
    
  });
});

it('cannot login without password', () => {
  cy.visit("/")
  const login = 'ce@gmail.com'
  cy.get('input[type="text"]').type(`${login}{enter}`);
  cy.get('button[type="submit"]').click()
    .should('not.have.text', 'Preferences')
    .should('have.text', 'Log In')
 
})
it('can login with password', () => {
  cy.visit("/")
  const login = 'ce@gmail.com'
  const password = '123'

  cy.get('input[placeholder="Username/Email"]').type(`${login}{enter}`);
  cy.get('input[placeholder="Password"]').type(`${password}{enter}`).wait(1500)
  
  cy.get('button[class="mx-5 dropdown-relative"]').click()
    // .should('have.text', 'Lets go on an adventure tgt')
    .should('not.have.text', 'Log In')
 
})
