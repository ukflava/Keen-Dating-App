context('Visit profile', () => {
  beforeEach(() => {
    cy.visit("/")
    const login = 'ce@gmail.com'
    const password = '123'
  
    cy.get('input[placeholder="Username/Email"]').type(`${login}{enter}`);
    cy.get('input[placeholder="Password"]').type(`${password}{enter}`).wait(500)
  })

  it("can visit profile", () => {
   
    cy.get('button[class="mx-5 dropdown-relative"]').click()
    cy.get('ul>li').eq(1).click().wait(100)
    cy.contains("Chris Evans");

  });



})
