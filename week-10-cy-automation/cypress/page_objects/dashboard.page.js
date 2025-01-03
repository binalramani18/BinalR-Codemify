class DashboardPage {
  get roleLabel() {
    return cy.get("a p");
  }

  get fullNameLabel() {
    return cy.get("a h6");
  }

  get userIconBtn() {
    return cy.get('header div.MuiBox-root > button > span');
  }
  get logoutBtn() {
    return cy.contains("Logout");
  }
}
export default new DashboardPage();
