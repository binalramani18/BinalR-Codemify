import userCredential from "../../fixtures/testData/userCredential.json";
import createNewListingPage from "../../page_objects/create.new.listing.page";
import listingDetails from "../../fixtures/testData/listingDetails.json";
import featuredListingPage from "../../page_objects/featuredlisting.page";
import homePage from "../../page_objects/home.page";

let listingId;

describe("create new listing", () => {
  afterEach(() => {
    cy.url().then((url) => {
      const listingId = url.split("/").pop();
      cy.deleteListing(listingId);
    });
  });

  it("Should create a new listing page", () => {
    cy.loginApi(userCredential.email, userCredential.password);
    cy.visit("/dashboard/real-estate/new");

    createNewListingPage.listingTitleInput.type(listingDetails.title);
    createNewListingPage.listingDescriptionInput.type(
      listingDetails.description
    );
    createNewListingPage.listingCityInput.type(listingDetails.city);
    createNewListingPage.listingAddressInput.type(listingDetails.address);
    createNewListingPage.listingZipCodeInput.type(listingDetails.zipCode);
    createNewListingPage.listingStateInput.type(listingDetails.state);
    createNewListingPage.selectState.click();
    createNewListingPage.listingAddImage.attachFile("images/house.jpg", {
      subjectType: "drag-n-drop",
    });
    createNewListingPage.listingsetPublishBtn.click();
    createNewListingPage.listingpriceInput.type(listingDetails.price);
    createNewListingPage.listingBedroomInput.type(listingDetails.bedrooms);
    createNewListingPage.listingBathroomInput.type(listingDetails.bathrooms);
    createNewListingPage.listingGarageInput.type(listingDetails.garage);
    createNewListingPage.listingSqftInput.type(listingDetails.sqft);
    createNewListingPage.listingLotSizeInput.type(listingDetails.lotSize);
    createNewListingPage.listingPostButton.click();

    cy.visit("/");
    homePage.searchInput.first().click();
    homePage.searchInput.first().type(listingDetails.title);
    homePage.startSearchBtn.click();
    featuredListingPage.moreInfoButton.click();
    cy.contains(listingDetails.title);
    cy.contains(listingDetails.lotSize);
    cy.contains(listingDetails.garage);
  });
});
