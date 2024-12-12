import homePage from "../../page_objects/home.page";

import featuredlistingPage from "../../page_objects/featuredlisting.page";

describe("Search Homepage", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    cy.visit("/");
    homePage.nightMode.click({ force: true }); // cy.get('[type="checkbox"]').click();
  });

  it("Should search by keyword", () => {
    homePage.searchInput.first().type("The Taj"); // cy.get('[type="text"]') //get Search field and type 'The Taj'
    homePage.startSearchBtn.click(); //should("exist").and("be.visible").click(); //cy.contains("Start Search") // click on 'Start Search' button

    // Verify listing property on the listing page

    featuredlistingPage.listingTitle.should("have.text", "Varniraj"); //cy.contain('.MuiGrid-root h5');
    featuredlistingPage.listingAddress.and("contain.text", "9876 main road"); //cy.contains("9876 main road");
    cy.contains("$ 600,000");
  });

  it("Should by Bedrooms", () => {
    homePage.bedroomDropdown.first().click(); //cy.contains("Bedrooms").next().click();
    homePage.bedroomNumber.click(); //cy.contains("3+");
    homePage.startSearchBtn.click({ force: true });

    /*cy.get('[viewBox="0 0 2048 1280"]').eq('0').parent().should('not.have.text', '1');
    cy.get('[viewBox="0 0 2048 1280"]').eq('1').parent().should('not.have.text', '1');
    cy.get('[viewBox="0 0 2048 1280"]').eq('2').parent().should('not.have.text', '1');
    cy.get('[viewBox="0 0 2048 1280"]').eq('3').parent().should('not.have.text', '1');
    cy.get('[viewBox="0 0 2048 1280"]').eq('4').parent().should('not.have.text', '1');
    cy.get('[viewBox="0 0 2048 1280"]').eq('5').parent().should('not.have.text', '1');*/
    homePage.verifyBedroomNumberDoesNotHaveText1();
  });

  it("Should by City", () => {
    homePage.cityInputFild.eq("1").type("chalala");
    homePage.startSearchBtn.click();

    featuredlistingPage.listingAddress.and("contain.text", "9876 main road");
    featuredlistingPage.listingTitle.should("have.text", "Varniraj");
    featuredlistingPage.zipCodeElement.should("be.visible");
  });

  it("Should search by Price", () => {
    cy.visit(
      "https://dev.delekhomes.com/featured-listings?price=500000-8000000"
    );

    featuredlistingPage.verifyPriceRange();
  });

  it.only("Should navigate to the listing details page upon click More Info", () => {
    homePage.searchInput.first().type("The Taj"); // cy.get('[type="text"]') //get Search field and type 'The Taj'
    homePage.startSearchBtn.click();
    featuredlistingPage.moreInfoButton.click();

    featuredlistingPage.realtorName.should("be.visible");
  });
});
