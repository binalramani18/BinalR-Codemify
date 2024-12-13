class HomePage{

get loginBtn(){return cy.get('[href="/auth/login"]')};
get registerBtn(){return cy.get('[href="/auth/register"]')};




}
export default new HomePage(); 