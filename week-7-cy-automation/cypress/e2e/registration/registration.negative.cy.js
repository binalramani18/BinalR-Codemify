
import { faker } from "@faker-js/faker";
import homePage from "../../../../week-7-cy-automation/cypress/page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";
import registrationPage from "../../page_objects/registration.page";

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
    registrationPage.emailInput.type(email);
    registrationPage.passwordInput.type(password);
    registrationPage.submitBtn.click();

    // Verify user cannot be logged in

    registrationPage.errorMsg.should("contain", "Input data validation failed");

    cy.title().should("eq", "Register | Delek Homes");
  });

  it("Should not register without filling in required fields_without last name", () => {
    homePage.registerBtn.click();
    registrationPage.firstNameInput.type("Binal");
    registrationPage.latNameInput.type("Ramani");
    registrationPage.emailInput.type(email);
    registrationPage.passwordInput.type(password);
    registrationPage.passwordInput.clear(password);
    registrationPage.submitBtn.click();

    cy.contains("Password is required");

    cy.contains("Register");
    cy.title().should("eq", "Register | Delek Homes");
  });
});
