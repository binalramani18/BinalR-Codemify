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
  
    verifyPriceRange(minPrice, maxPrice) {
      this.priceElements.eq(0).each((priceElement) => {
        const price = priceElement.text().replace(/\D/g, "");
  
        expect(parseInt(price)).to.be.above(499999);
        expect(parseInt(price)).to.be.below(5100000);
      });
    }
  
    get moreInfoButton() {
      return cy.contains("More Info");
    }
    get realtorName() {
      return cy.contains("Realtor: Binal Ramani");
    }
  }
  export default new FeaturedListingPage();
  