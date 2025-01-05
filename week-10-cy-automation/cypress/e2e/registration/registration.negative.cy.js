import { faker } from "@faker-js/faker";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import registrationPage from "../../page_objects/registration.page";
import loginPage from "../../page_objects/login.page";
import userCredentials from "../../fixtures/testData/userCredentials.json";
import verificationText from "../../fixtures/testData/verificationText.json";

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
    registrationPage.firstNameInput.type(userCredentials.firstName);
    registrationPage.latNameInput.type(userCredentials.lastName);
    registrationPage.emailInput.type(userCredentials.email);
    registrationPage.passwordInput.type(userCredentials.password);
    registrationPage.submitBtn.click();

    registrationPage.errorMsg.should("have.text", verificationText.errorMsg);

    cy.title().should("eq", "Register | Delek Homes");
  });

  it("Should not register without filling in required fields_without last name", () => {
    homePage.registerBtn.click();
    registrationPage.firstNameInput.type(userCredentials.firstName);
    registrationPage.latNameInput.type(userCredentials.lastName);
    registrationPage.emailInput.type(userCredentials.email);
    registrationPage.passwordInput.type(userCredentials.password);
    registrationPage.passwordInput.clear(userCredentials.password);
    registrationPage.submitBtn.click();

    registrationPage.passwordError.contains(verificationText.passwordErrorMsg);
    cy.contains("Register");
    cy.title().should("eq", "Register | Delek Homes");
  });
});
