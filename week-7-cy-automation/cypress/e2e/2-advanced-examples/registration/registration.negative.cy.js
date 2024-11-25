import { faker } from "@faker-js/faker";

import homePage from "../../../page_objects/home.page";
import registrationPage from "../../../page_objects/registration.page";
import dashboardPage from "../../../page_objects/dashboard.page";
import loginPage from "../../../page_objects/login.page";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration negative scenario", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not register with an already existing email account", () => {
    homePage.registerBtn.click();
    registrationPage.firstNameInput.type("Binal");
    registrationPage.latNameInput.type("Ramani");
    registrationPage.emailInput.type("testuser2@codemify.com");
    registrationPage.passwordInput.type("Summer22*");
    registrationPage.submitBtn.click();

    cy.contains("Register").click();
    // Verify user cannot be logged in
    registrationPage.errorMsg.should("contain", "Input data validation failed");
    cy.title().should("eq", "Register | Delek Homes");
  });

  it("Should not register without filling in required fields_without last name", () => {
    homePage.registerBtn.click();
    registrationPage.firstNameInput.type("Binal");
    registrationPage.latNameInput.type("Ramani");
    registrationPage.emailInput.type("testuser2@codemify.com");
    registrationPage.passwordInput.type("1234");
    registrationPage.passwordInput.clear("1234"); //cy.get('[name="password"]').clear('1234');
    registrationPage.submitBtn.click(); //cy.get('[type="submit"]').click();

    registrationPage.passwordError.should("be.visible");

    cy.contains("Register");
    cy.title().should("eq", "Register | Delek Homes");
  });
});
