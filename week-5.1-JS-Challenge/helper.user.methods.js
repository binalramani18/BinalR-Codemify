class Helpers {
     /* 1 - Implement a function “getUsersByStatus“  helper.user.methods.js file.
        The function should return the users from the api.user.response object who has Deactivated status and not empty Description 
        Expected result: // [ Frank ]  */

    getUsersByStatus(response, status) {
        const users = [];

      for (let i = 0; i < response.users.length; i++) {
        const element = response.users[i];
        if (element.role.status === status && element.role.description !== '' && element.role.description !== null) 
            { users.push(element.name);
            
        }
        
      }

        return users;
    }
            /* 2 - Implement a function “getUsersByRole“ in the helper.user.methods.js file 
              The function should return the users from the api.user.response object who has role Admin and id = 1 (id from role object)
               Expected result: // [ Alice, David] */
    getUsersByRole(response, role, roleId) {
        const users = [];

        for (let i = 0; i < response.users.length; i++) {
            const element = response.users[i];
            if (element.role.name === role && element.role.id === roleId) {
                users.push(element.name);
                
            }
        }


        return users;
    }
       /*  3 - Implement a function “getUsersByEmailDomain“ in the helper.user.methods.js file 
          The function should return the users from the api.user,response object who contains in email domain = codemify
            Expected result: // [ Alice, Karen ] */

    getUsersByEmailDomain(response, domain) {
        const users = [];

       for (let i = 0; i < response.users.length; i++) {
        const element = response.users[i];
        if (element.email.includes('codemify')) {
           users.push(element.name);
            
        }
       }

        return users;
    }
          /*4 - Implement a function “getUserBalanceByCurrency“ in the helper.user.methods.js file 
             The function should return the users balance from the api.user.response object who has currency USD
               Expected result: // [ 1000, 1200, 900 ]  */

    getUserBalanceByCurrency(response, currency) {

        const balances = [];
        
        for (let i = 0; i <response.users.length; i++) {
            const element =response.users[i];
            if (element.currency === currency) {
                balances.push(element.balances);
                
            }
            
        }
        
        
        return balances;
    }
}

export default new Helpers()