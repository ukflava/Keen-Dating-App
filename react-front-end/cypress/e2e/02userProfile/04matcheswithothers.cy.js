context('Choose matches', () => {
  
  before(() => {
    cy.request('POST','/api/hardreset').wait(300)
    cy.request('POST','/api/matchesreset').wait(300)
    cy.visit("/")
    const login = 'ce@gmail.com'
    const password = '123'
  
    cy.get('input[placeholder="Username/Email"]').type(`${login}{enter}`);
    cy.get('input[placeholder="Password"]').type(`${password}{enter}`).wait(500)
  })



  it("can change preferences and save it", () => {

    cy.visit("/preferences")
    .contains('Dating Preferences')
    cy.get('div').contains('I want to meet...').click().wait(300)
    cy.get('input[type="radio"]').check('3').wait(300);
    cy.get('div').contains('Someone who drinks...').click().wait(300)
    cy.get('input[type="radio"]').check('1').wait(300);
    cy.get('div').contains('Someone who exercises...').click().wait(300)
    cy.get('input[type="radio"]').check('1').wait(300);
    cy.get('div').contains('Looking for').click().wait(300)
    cy.get('input[type="radio"]').check('1').wait(300);
    cy.get('a').contains('Save').click().wait(300)
    
    cy.get('section').trigger('mouseover')
  // cy.trigger('mousedown', { which: 1})
  .trigger('mousedown', 600, 350 )
  .trigger('mousemove', { clientX: 900, clientY: 300 })
  .trigger('mouseup', 900, 300 )

})
})
