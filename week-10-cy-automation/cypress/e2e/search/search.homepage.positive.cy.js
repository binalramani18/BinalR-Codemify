import homePage from "../../page_objects/home.page";
import featuredlistingPage from "../../page_objects/featuredlisting.page";
import listingDetails from "../../fixtures/testData/listingDetails.json";
import userCredentials from "../../fixtures/testData/userCredentials.json";

let listingId;

describe("Search Homepage", () => {
  before(() => {
    cy.loginApi(userCredentials.email, userCredentials.password);
    cy.createListing(listingDetails).then((id) => {
      listingId = id;
    });
  });

  beforeEach(() => {
    cy.errorHandler();
    cy.visit("/");
    homePage.nightMode.click();
  });

  after(() => {
    cy.deleteListing(listingId);
  });

  it("Should search by keyword", () => {
    homePage.searchInput.first().type(listingDetails.title);
    homePage.startSearchBtn.click();

    featuredlistingPage.listingTitle
      .first()
      .should("have.text", listingDetails.title);
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

    featuredlistingPage.listingTitle
      .first()
      .should("have.text", listingDetails.title);

    featuredlistingPage.moreInfoButton.click();
    cy.contains(listingDetails.title);

    cy.contains(listingDetails.city);
    cy.contains(listingDetails.address);
    cy.contains(listingDetails.sqft);
    cy.contains(listingDetails.bathrooms);
  });

  it("Should search by Price", () => {
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
