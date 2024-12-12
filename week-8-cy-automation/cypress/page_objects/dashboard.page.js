class DashboardPage {
  get roleLabel() {
    return cy.get("a p");
  }
  // Verify first name as well
  get fullNameLabel() {
    return cy.get("a h6");
  }

  //user icon menu
  get userIconBtn() {
    return cy.get('button [data-testid="PersonIcon"]');
  }
  get logoutBtn() {
    return cy.contains("Logout");
  }
}
export default new DashboardPage();
