context('Edit profile', () => {
  beforeEach(() => {
    cy.request('POST','/api/hardreset').wait(300)
    cy.visit("/")
    const login = 'ce@gmail.com'
    const password = '123'
  
    cy.get('input[placeholder="Username/Email"]').type(`${login}{enter}`);
    cy.get('input[placeholder="Password"]').type(`${password}{enter}`).wait(500)
    cy.get('button[class="mx-5 dropdown-relative"]').click()
    cy.get('ul>li').eq(1).click().wait(100)
    cy.contains("Chris Evans");
  })


  it("can edit bio in profile", () => {
   const text = "lorem ipsum bio changed"
   
    cy.visit("/profile").wait(300)
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.get('span').contains("Education").should('exist');
    cy.get('textarea').contains('Looking for an adventure partner. You in?').type(`${text}{enter}`).wait(300);
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('View').click().wait(300);
    cy.get('div').contains("bio changed").should('exist');
        });

  it("can edit Education", () => {
      const text = " in other galaxy"
    cy.visit("/profile").wait(300)
    
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.get('textarea').contains('University').type(`${text}{enter}`).wait(300);
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('View').click().wait(300);
    cy.get('div').contains("galaxy").should('exist');
    
     });

  it("can edit Job", () => {
      const text = " yeaaaah"
    cy.visit("/profile").wait(300)
    
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.get('textarea').contains('actor').type(`${text}{enter}`).wait(300);
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('View').click().wait(300);
    cy.get('div').contains("yeaaaah").should('exist');
    
     });

  it("can edit preferences", () => {
      cy.visit("/profile").wait(300)
   
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.get('div').contains('I drink').click().wait(300);
    cy.get('div').contains('Never').click().wait(300)
    cy.get('div').contains("Never").should('exist');
     });

  it("can edit few inputs of profile at same time", () => {
   const text = "lorem ipsum bio changed"
   const text2 = " in other galaxy"
    cy.visit("/profile").wait(300)
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.contains("Education").should('exist');
    cy.get('textarea').contains('Looking for an adventure partner. You in?').type(`${text}{enter}`).wait(300);
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('View').click().wait(300);
    cy.contains("bio changed").should('exist');
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.get('textarea').contains('University').type(`${text2}{enter}`).wait(300);
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('View').click().wait(300);
    cy.contains("galaxy").should('exist');
    cy.get('button[class="hover:text-fuchsia-800 bg-white "]').contains('Edit').click().wait(300);
    cy.get('div').contains('I drink').click().wait(300);
    cy.get('div').contains('Never').click().wait(300)
    cy.get('div').contains("Never").should('exist');
     });




})
