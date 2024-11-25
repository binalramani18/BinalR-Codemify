
import { faker } from "@faker-js/faker";

import homePage from "../../../page_objects/home.page";
import registrationPage from "../../../page_objects/registration.page";
import dashboardPage from "../../../page_objects/dashboard.page";
import loginPage from "../../../page_objects/login.page";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    homePage.registerBtn.click(); //cy.get('[href="/auth/register"]').click();
    registrationPage.firstNameInput.type("Binal"); ////cy.get('[name="firstName"]').type('Binal');
    registrationPage.latNameInput.type("Ramani");
    registrationPage.emailInput.type(email);
    registrationPage.passwordInput.type(password);
    registrationPage.submitBtn.click();

    //click user icon and logout btn
    dashboardPage.userIconBtn.click();
    dashboardPage.logoutBtn.click();

    //click login btn and login
    loginPage.loginBtn.click();
    loginPage.login(email, password);

    // verify role, name
    dashboardPage.roleLabel.should("have.text", "role: user");
    dashboardPage.fullNameLabel.should("have.text", "Binal  Ramani");
  });
});
