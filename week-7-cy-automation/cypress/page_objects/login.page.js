class LoginPage {
  //loginPage.emailInput.type('testuser2@codemify.com')
  get emailInput() {
    return cy.get('[name="email"]');
  }

  get passwordInput() {
    return cy.get('[name="password"]');
  } ////type in password

  get loginBtn() {
    return cy.contains("Login");
  } ////click login button

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginBtn.click();
   //dashboardPage.roleLabel.should("have.text", "role: user");
  }
}

export default new LoginPage();
