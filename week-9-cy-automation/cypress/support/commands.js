Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Commands.add("loginApi", (email = "testuser2@codemify.com", password = "November22*") => {
  cy.request("POST", "/api/users/login", {
    "email" : email,
    "password": password,
  }).then((response) => {
   
    window.localStorage.setItem("accessToken", response.body.accessToken);
  });

});
