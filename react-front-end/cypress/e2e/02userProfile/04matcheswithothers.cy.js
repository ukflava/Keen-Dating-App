context('Swipe matches', () => {
  
  beforeEach(() => {
    cy.request('POST','/api/hardreset').wait(300)
    cy.request('POST','/api/matchesreset').wait(300)
    cy.visit("/")
    const login = 'ce@gmail.com'
    const password = '123'
  
    cy.get('input[placeholder="Username/Email"]').type(`${login}{enter}`);
    cy.get('input[placeholder="Password"]').type(`${password}{enter}`).wait(500)

    cy.visit("/preferences").wait(300)
    
    cy.get('div').contains('I want to meet...').click()
    cy.get('input[type="radio"]').check('3');
    cy.get('div').contains('Someone who drinks...').click()
    cy.get('input[type="radio"]').check('1').wait(300);
    cy.get('div').contains('Someone who exercises...').click()
    cy.get('input[type="radio"]').check('1');
    cy.get('div').contains('Looking for').click()
    cy.get('input[type="radio"]').check('1').wait(300);
    cy.get('a').contains('Save').click().wait(300)
  })




  it("can swipe left to see other possible Matches", () => {

   
    cy.get('section').trigger('mouseover')
      .trigger('mousedown', 600, 350 )
    .trigger('mousemove', { clientX: 200, clientY: 350 })
    .trigger('mouseup', 200, 350 )
    
    
  
    cy.get('#20').should('be.visible')



})

it("can swipe left more than 1 time", () => {

   
  cy.get('section').trigger('mouseover')
    .trigger('mousedown', 600, 350 )
  .trigger('mousemove', { clientX: 200, clientY: 350 })
  .trigger('mouseup', 200, 350 ).wait(1000)
  
  
  cy.get('#20').should('be.visible')

  cy.get('section').trigger('mouseover')
    .trigger('mousedown', 600, 350 )
  .trigger('mousemove', { clientX: 250, clientY: 350 })
  .trigger('mouseup', 250, 350 )
  
  
   cy.get('#16').should('be.visible')



})




  it("can swipe right to match with others", () => {

    cy.get('section').trigger('mouseover')
      .trigger('mousedown', 600, 350 )
    .trigger('mousemove', { clientX: 900, clientY: 300 })
    .trigger('mouseup', 900, 300 )
    
    cy.get('#matchesNAvLink').click().wait(300)

    cy.get('div').contains( 'Chris').should('be.visible')
    cy.get('div').contains( 'martin').should('be.visible')
})



})
