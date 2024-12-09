import { faker } from "@faker-js/faker";
import homePage from "../../../../week-7-cy-automation/cypress/page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";
import registrationPage from "../../page_objects/registration.page";


const email = faker.internet.email();
const password = faker.string.uuid();


describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
   
homePage.registerBtn.click();
registrationPage.firstNameInput.type("Binal");
registrationPage.latNameInput.type("Ramani");
registrationPage.emailInput.type(email);
registrationPage.passwordInput.type(password);
registrationPage.submitBtn.click();

dashboardPage.roleLabel.should("have.text", "role: user");
dashboardPage.fullNameLabel.should("have.text", "Binal  Ramani");

// confirm register user can login

dashboardPage.userIconBtn.click();
cy.contains("Logout").click();

loginPage.login(email,password);

dashboardPage.fullNameLabel.should("have.text", "Binal  Ramani");

dashboardPage.roleLabel.should("have.text", "role: user");


    
  });
});
