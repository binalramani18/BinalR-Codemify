class RegistrationPage {
  get firstNameInput() {
    return cy.get('[name="firstName"]');
  }
  get latNameInput() {
    return cy.get('[name="lastName"]');
  }
  get emailInput() {
    return cy.get('[name="email"]');
  }
  get passwordInput() {
    return cy.get('[name="password"]');
  }
  get submitBtn() {
    return cy.get('[type="submit"]');
  }
  get errorMsg() {
    return cy.get('[role="alert"]');
  }
  get passwordError() {
    return cy.contains("Password is required");
  } 
}
export default new RegistrationPage();