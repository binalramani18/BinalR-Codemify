import homePage from "../../page_objects/home.page";
import featuredlistingPage from "../../page_objects/featuredlisting.page";

describe("Search Homepage", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit("/");
    homePage.nightMode.click({ force: true });
  });

  it("Should search by keyword", () => {
    homePage.searchInput.first().type(listingDetails.title);
    homePage.startSearchBtn.click();

    featuredlistingPage.listingTitle.should("have.text", listingDetails.title);
  });

  it("Should by Bedrooms", () => {
    homePage.bedroomDropdown.first().click();
    homePage.bedroomNumber.click();
    homePage.startSearchBtn.click({ force: true });
    homePage.bedroomIcon.each(($el, index) => {
      cy.wrap($el).parent().should("not.have.text", "1");
    });
  });

  it("Should by City", () => {
    homePage.cityInputFild.eq("1").type(listingDetails.city);
    homePage.startSearchBtn.click();

    featuredlistingPage.listingTitle.should("have.text", listingDetails.title);

    featuredlistingPage.moreInfoButton.click();
    cy.contains(listingDetails.title);

    cy.contains(listingDetails.askingPrice);
    cy.contains(listingDetails.address);
    cy.contains(listingDetails.squareFeet);
    cy.contains(listingDetails.bathrooms);
    cy.contains(listingDetails.listingDate);
  });

  it.only("Should search by Price", () => {
    cy.visit("/featured-listings?price=500000-8000000");

    featuredlistingPage.priceElements.each((priceElement) => {
      const price = priceElement.text().replace(/\D/g, "");

      expect(parseInt(price)).to.be.above(499999);
      expect(parseInt(price)).to.be.below(8100000);
    });
  });

  it("Should navigate to the listing details page upon click More Info", () => {
    homePage.cityInputFild.eq("1").type(listingDetails.city);
    homePage.startSearchBtn.click();
    featuredlistingPage.moreInfoButton.click();

    featuredlistingPage.realtorName.should("be.visible");
  });
});
