describe('Login', () => {
    beforeEach(() => {
      
      cy.visit('/');
    })
  
    it('Should log in with your existing account', () => {
      cy.get('[href="/auth/login"]').click();
      cy.get('[name="email"]').type('testuser2@codemify.com');
      cy.get('[name="password"]').type('November22*');
      cy.contains('Login').click();
      // Verify user role and title
      cy.get('[class="MuiTypography-root MuiTypography-body2 MuiTypography-noWrap css-10n697b"]').should('have.text' , 'role: user') 
      // Verify name as well
      cy.title().should('eq', 'User: Profile | Delek Homes');  



    })
  })