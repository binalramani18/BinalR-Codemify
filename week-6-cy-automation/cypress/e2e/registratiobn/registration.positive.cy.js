
import { faker } from '@faker-js/faker';
import homePage from '../../../../week-7-cy-automation/cypress/page_objects/home.page';


const email = faker.internet.email()
const password = faker.string.uuid()
describe('Registration', () => {
    beforeEach(() => {
      
      cy.visit('/');
    })
  
    it('Should register a new user account', () => {
      cy.get('[href="/auth/register"]').click();
      cy.get('[name="firstName"]').type('Binal');  
      cy.get('[name="lastName"]').type('Ramani');  
      cy.get('[name="email"]').type(email);  
      cy.get('[name="password"]').type('Summer33*'); 
      cy.get('[type="submit"]').click();
      cy.contains('Register').click();
      cy.get('a p').should('have.text' , 'role: user');
      cy.get('a h6').should('have.text', 'Binal Ramani')
      cy.get('button [data-testid="PersonIcon"]');
      cy.contains('Logout');
  })
  })