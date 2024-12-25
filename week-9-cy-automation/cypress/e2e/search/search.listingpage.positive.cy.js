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
    homePage.searchInput.first().type("The Taj");
    homePage.startSearchBtn.click();

    featuredlistingPage.listingTitle.should("have.text", "Varniraj");
    featuredlistingPage.listingAddress.and("contain.text", "9876 main road");
    cy.contains("$ 600,000");
  });

  it("Should by Bedrooms", () => {
    homePage.bedroomDropdown.first().click();
    homePage.bedroomNumber.click();
    homePage.startSearchBtn.click({ force: true });
  });

  it("Should by City", () => {
    homePage.cityInputFild.eq("1").type("chalala");
    homePage.startSearchBtn.click();

    featuredlistingPage.listingAddress.and("contain.text", "9876 main road");
    featuredlistingPage.listingTitle.should("have.text", "Varniraj");
    featuredlistingPage.zipCodeElement.should("be.visible");
  });

  it.only("Should search by Price", () => {
    cy.visit("/featured-listings?price=500000-8000000");

    featuredlistingPage.priceElements.each((priceElement) => {
      const price = priceElement.text().replace(/\D/g, "");

      expect(parseInt(price)).to.be.above(499999);
      expect(parseInt(price)).to.be.below(5100000);
    });
  });

  it("Should navigate to the listing details page upon click More Info", () => {
    homePage.searchInput.first().type("The Taj");
    homePage.startSearchBtn.click();
    featuredlistingPage.moreInfoButton.click();

    featuredlistingPage.realtorName.should("be.visible");
  });
});
