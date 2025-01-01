class FeaturedListingPage {
  get listingTitle() {
    return cy.get(".MuiGrid-root h5");
  }
  get listingAddress() {
    return cy.contains("9876 main road");
  }

  get zipCodeElement() {
    return cy.contains(365601);
  }

  get priceElements() {
    return cy.get(".MuiPaper-rounded div :contains($)");
  }

  get moreInfoButton() {
    return cy.contains("More Info");
  }
  get realtorName() {
    return cy.contains("Realtor: Binal Ramani");
  }
  get askingPrice(){return cy.contains("Asking Price")};
  get lotSize(){return cy.contains("Lot Size")};
  get garageIcon(){return cy.contains("Garage")};
  get squareFeet(){return cy.contains(" Sqft")};
  
}
export default new FeaturedListingPage();
