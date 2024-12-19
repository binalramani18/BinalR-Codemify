import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Logout", () => {
  beforeEach(() => {
    cy.loginApi();
    cy.visit("/dashboard/user/profile");
  });

  it("Should login and logout", () => {
    cy.fixture("verificationText").then((data) => {
      dashboardPage.roleLabel.should("have.text", data.role);
      dashboardPage.fullNameLabel.should("have.text", data.fullName);
    });

    dashboardPage.userIconBtn.click();
    cy.contains("Logout").click();

    loginPage.signInText.should("be.visible");
  });
});
