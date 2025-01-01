import { faker } from "@faker-js/faker";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import registrationPage from "../../page_objects/registration.page";
import loginPage from "../../page_objects/login.page";
import userCredential from "../../fixtures/userCredential.json";
import verificationText from "../../fixtures/verificationText.json";

const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.string.uuid(),
};

describe("Registration negative scenario", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not register with an already existing email account", () => {
    cy.visit("/");
    homePage.registerBtn.click();
    registrationPage.firstNameInput.type(userCredential.firstName);
    registrationPage.latNameInput.type(userCredential.lastName);
    registrationPage.emailInput.type(userCredential.email);
    registrationPage.passwordInput.type(userCredential.password);
    registrationPage.submitBtn.click();
    // Verify user cannot be logged in

    registrationPage.errorMsg.should("have.text", verificationText.errorMsg);

    cy.title().should("eq", "Register | Delek Homes");
  });

  it("Should not register without filling in required fields_without last name", () => {
    homePage.registerBtn.click();
    registrationPage.firstNameInput.type(userCredential.firstName);
    registrationPage.latNameInput.type(userCredential.lastName);
    registrationPage.emailInput.type(userCredential.email);
    registrationPage.passwordInput.type(userCredential.password);
    registrationPage.passwordInput.clear(userCredential.password);
    registrationPage.submitBtn.click();

    cy.contains("Password is required");

    cy.contains("Register");
    cy.title().should("eq", "Register | Delek Homes");
  });
});
