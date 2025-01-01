class HomePage {
  get loginBtn() {
    return cy.get('[href="/auth/login"]');
  }
  get registerBtn() {
    return cy.get('[href="/auth/register"]');
  }

  get nightMode() {
    return cy.get('[type="checkbox"]');
  }

  get searchInput() {
    return cy.get('[type="text"]');
  }
  get startSearchBtn() {
    return cy.get('[type="button"]');
  }

  get bedroomDropdown() {
    return cy.get('[role="button"]');
  }
  get bedroomNumber() {
    return cy.contains("3+");
  }
  get bedroomIcon() {
    return cy.get('[viewBox="0 0 2048 1280"]');
  }

  get cityInputFild() {
    return cy.get('[type="text"]');
  }
}
export default new HomePage();
