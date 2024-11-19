describe('Registration', () => {
    beforeEach(() => {
      
      cy.visit('/');
    })
  
    it('Should register a new user account', () => {
      cy.get('[href="/auth/register"]').click();
      cy.get('[name="firstName"]').type('Binal');  
      cy.get('[name="lastName"]').type('Ramani');  
      cy.get('[name="email"]').type('testuser3@codemify.com');  
      cy.get('[name="password"]').type('Summer33*'); 
      cy.get('[type="submit"]').click();



      cy.contains('Register').click();
      cy.get('[class="MuiTypography-root MuiTypography-body2 MuiTypography-noWrap css-10n697b"]').should('have.text' , 'role: user');
      cy.get('h6').should('have.text', 'Binal Ramani')
      cy.title().should('eq', 'User: Profile | Delek Homes');  



    })
  })