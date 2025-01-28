Cypress.Commands.add("errorHandler", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

Cypress.Commands.add("loginApi", (email, password) => {
  cy.request("POST", "/api/users/login", {
    email: email,
    password: password,
  }).then((response) => {
    window.localStorage.setItem("accessToken", response.body.accessToken);
  });
});

Cypress.Commands.add("createListing", (listingDetails) => {
  cy.fixture("images/house.jpg").then((image) => {
    const blob = Cypress.Blob.base64StringToBlob(image, "/house.jpg");

    const formData = new FormData();
    formData.append("images", blob);
    formData.append("title", listingDetails.title);
    formData.append("lotSize", listingDetails.lotSize);
    formData.append("sqft", listingDetails.sqft);
    formData.append("garage", listingDetails.garage);
    formData.append("bathrooms", listingDetails.bathrooms);
    formData.append("bedrooms", listingDetails.bedrooms);
    formData.append("price", listingDetails.price);
    formData.append("zipCode", listingDetails.zipCode);
    formData.append("state", listingDetails.state);
    formData.append("city", listingDetails.city);
    formData.append("address", listingDetails.address);
    formData.append("description", listingDetails.description);
    formData.append("isPublished", "true");

    const token = window.localStorage.getItem("accessToken");

    return cy
      .request({
        method: "POST",
        url: "/api/estate-objects",
        headers: {
          Authorization: `Bearer ${token}`,
        },

        body: formData,
      })
      .then((response) => {
        const listingId = JSON.parse(
          String.fromCharCode.apply(null, new Uint8Array(response.body))
        ).id;

        return listingId;
      });
  });
});

Cypress.Commands.add("deleteListing", (listingId) => {
  const token = window.localStorage.getItem("accessToken");
  return cy.request({
    method: "DELETE",
    url: `/api/estate-objects/${listingId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
});
