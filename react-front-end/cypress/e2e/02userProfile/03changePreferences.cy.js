context('Change preferences', () => {
  
  before(() => {
    // cy.request('POST', '/post', {  // whatever url your app uses to add  
    //   // data for post
    // })

    cy.request('POST','/api/hardreset').wait(1000)
    
    cy.visit("/")
    const login = 'ce@gmail.com'
    const password = '123'
  
    cy.get('input[placeholder="Username/Email"]').type(`${login}{enter}`);
    cy.get('input[placeholder="Password"]').type(`${password}{enter}`).wait(500)
  })
  // beforeEach(() => {
  //   cy.visit("/hardreset") 
  // })


  it("can change preferences and save it", () => {

    cy.visit("/preferences")
    .contains('Dating Preferences')
    cy.get('div').contains('I want to meet...').click().wait(300)
    cy.get('div').contains('I want to meet...').should('be.visible')
    cy.get('div').contains('Woman').should('be.visible')
    cy.get('div').contains('Man').should('be.visible')
   
    cy.get('input[type="radio"]').check('3').wait(300);
    cy.contains("Everyone").should('be.visible');
    cy.get('div').contains('Someone who drinks...').click().wait(300)
    cy.get('div').contains( 'Socially').should('be.visible')
    cy.get('div').contains( 'Yes').should('be.visible')
    cy.get('input[type="radio"]').check('2').wait(300);
    // cy.contains("Never").should('be.visible');
    cy.get('a').contains('Save').click().wait(300)
    cy.get('div').contains('Check back later to see new people or update your preferences.').should('be.visible')

})
})
