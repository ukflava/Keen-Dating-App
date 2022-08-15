context('Edit profile', () => {
  beforeEach(() => {
    cy.visit("/")
    const login = 'ce@gmail.com'
    const password = '123'
  
    cy.get('input[placeholder="Username/Email"]').type(`${login}{enter}`);
    cy.get('input[placeholder="Password"]').type(`${password}{enter}`).wait(500)
  })


  it("can edit profile", () => {
   const text = "lorem ipsum bio changed"
   const text2 = " in other galaxy"
    cy.visit("/profile")
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.contains("Education");
    cy.get('textarea').contains('Looking for an adventure partner. You in?').type(`${text}{enter}`).wait(300);
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('View').click().wait(300);
    cy.contains("bio changed");
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.get('textarea').contains('University').type(`${text2}{enter}`).wait(300);
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('View').click().wait(300);
    cy.contains("galaxy");
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.get('div').contains('I drink').click().wait(300);
    cy.get('div').contains('Never').click().wait(300)
    cy.contains("Never");
     });




})
