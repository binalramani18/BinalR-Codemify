import userCredentials from "../../fixtures/testData/userCredentials.json";
import CreateNewlistingPage from "../../page_objects/create.new.listing.page";
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
    cy.loginApi(userCredentials.email, userCredentials.password);
    cy.visit("/dashboard/real-estate/new");

   CreateNewlistingPage.listingTitleInput.type(listingDetails.title);
    CreateNewlistingPage.listingDescriptionInput.type(
      listingDetails.description
    );
    CreateNewlistingPage.listingCityInput.type(listingDetails.city);
    CreateNewlistingPage.listingAddressInput.type(listingDetails.address);
    CreateNewlistingPage.listingZipCodeInput.type(listingDetails.zipCode);
   CreateNewlistingPage.listingStateInput.type(listingDetails.state);
   CreateNewlistingPage.selectState.click();
   CreateNewlistingPage.listingAddImage.attachFile("images/house.jpg", {
      subjectType: "drag-n-drop",
    });
   CreateNewlistingPage.listingsetPublishBtn.click();
   CreateNewlistingPage.listingpriceInput.type(listingDetails.price);
   CreateNewlistingPage.listingBedroomInput.type(listingDetails.bedrooms);
   CreateNewlistingPage.listingBathroomInput.type(listingDetails.bathrooms);
   CreateNewlistingPage.listingGarageInput.type(listingDetails.garage);
   CreateNewlistingPage.listingSqftInput.type(listingDetails.sqft);
   CreateNewlistingPage.listingLotSizeInput.type(listingDetails.lotSize);
   CreateNewlistingPage.listingPostButton.click();

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
