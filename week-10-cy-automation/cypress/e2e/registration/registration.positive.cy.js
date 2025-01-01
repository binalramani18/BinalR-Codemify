import { faker } from "@faker-js/faker";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";
import registrationPage from "../../page_objects/registration.page";

const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.string.uuid(),
};

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    homePage.registerBtn.click();
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.latNameInput.type(userData.lastName);
    registrationPage.emailInput.type(userData.email);
    registrationPage.passwordInput.type(userData.password);
    registrationPage.submitBtn.click();

    dashboardPage.roleLabel.should("have.text", "role: user");

    dashboardPage.userIconBtn.click({ force: true });
    cy.contains("Logout").click();

    loginPage.login(userData.email, userData.password);

    dashboardPage.roleLabel.should("have.text", "role: user");
  });
});
